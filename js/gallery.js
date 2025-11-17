document.addEventListener('DOMContentLoaded', async function() {
    // Load gallery data from JSON files
    const galleryContainer = document.querySelector('.gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let galleryData = [];
    let currentFilter = 'all';

    // Function to load all gallery JSON files
    async function loadGalleryData() {
        try {
            // List of gallery JSON files
            const galleryFiles = [
                '2024-11-01-asabe-presentation.json',
                '2024-11-02-bug-monitoring.json',
                '2024-11-03-festival.json',
                '2024-11-04-chamdo-research.json',
                '2024-11-05-chamdog-research.json'
            ];

            const promises = galleryFiles.map(async (file) => {
                try {
                    const response = await fetch(`_data/gallery/${file}`);
                    if (response.ok) {
                        return await response.json();
                    }
                    return null;
                } catch (error) {
                    console.error(`Error loading ${file}:`, error);
                    return null;
                }
            });

            const results = await Promise.all(promises);
            galleryData = results.filter(item => item && item.published);

            // Sort by date (newest first)
            galleryData.sort((a, b) => new Date(b.date) - new Date(a.date));

            renderGallery();
        } catch (error) {
            console.error('Error loading gallery data:', error);
            // Fallback: keep existing static HTML gallery
        }
    }

    // Function to render gallery from JSON data
    function renderGallery() {
        if (!galleryContainer || galleryData.length === 0) {
            console.log('Using static gallery HTML');
            setupLightbox();
            return;
        }

        galleryContainer.innerHTML = '';

        galleryData.forEach(item => {
            if (currentFilter === 'all' || item.category === currentFilter) {
                const galleryItem = createGalleryItem(item);
                galleryContainer.appendChild(galleryItem);
            }
        });

        setupLightbox();
    }

    // Function to create gallery item HTML
    function createGalleryItem(data) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-category', data.category);
        item.style.animation = 'fadeIn 0.5s ease forwards';

        item.innerHTML = `
            <div class="gallery-image">
                <img src="${data.image}"
                     alt="${data.alt}"
                     loading="lazy">
                <div class="gallery-overlay">
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                </div>
            </div>
        `;

        return item;
    }

    // 필터 버튼 클릭 이벤트
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 활성화된 버튼 스타일 변경
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentFilter = button.getAttribute('data-filter');

            if (galleryData.length > 0) {
                // Dynamic gallery: re-render
                renderGallery();
            } else {
                // Static gallery: use existing filtering logic
                const galleryItems = document.querySelectorAll('.gallery-item');
                galleryItems.forEach(item => {
                    if (currentFilter === 'all' || item.getAttribute('data-category') === currentFilter) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeIn 0.5s ease forwards';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });

    // Lightbox setup function
    function setupLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxClose = document.querySelector('.lightbox-close');

        // Lightbox 요소들이 존재하는지 확인
        if (!lightbox || !lightboxImg || !lightboxCaption) {
            console.error('Lightbox elements not found');
            return;
        }

        // lightbox 닫기 함수
        function closeLightbox() {
            if (lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = ''; // 스크롤 복원
            }
        }

        // 갤러리 이미지 클릭 시 lightbox 열기
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            const img = item.querySelector('.gallery-image img');
            const overlay = item.querySelector('.gallery-overlay');

            if (!img || !overlay) return;

            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                // 이미지 소스 설정
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || '';

                // 캡션 설정
                const title = overlay.querySelector('h3');
                const subtitle = overlay.querySelector('p');

                if (title && subtitle) {
                    lightboxCaption.innerHTML = `<strong>${title.textContent}</strong><br>${subtitle.textContent}`;
                } else if (title) {
                    lightboxCaption.innerHTML = `<strong>${title.textContent}</strong>`;
                } else {
                    lightboxCaption.innerHTML = '';
                }

                // Lightbox 표시
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // 스크롤 방지
            });
        });

        // 이미지 로딩 최적화
        const images = document.querySelectorAll('.gallery-image img');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        });

        // lightbox 닫기 버튼
        if (lightboxClose) {
            lightboxClose.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeLightbox();
            });
        }

        // lightbox 배경 클릭 시 닫기
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target === lightboxImg) {
                closeLightbox();
            }
        });

        // ESC 키로 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // Initialize: Try to load JSON data, fallback to static HTML
    await loadGalleryData();

    // If no JSON data loaded, setup lightbox for static gallery
    if (galleryData.length === 0) {
        setupLightbox();
    }
});
