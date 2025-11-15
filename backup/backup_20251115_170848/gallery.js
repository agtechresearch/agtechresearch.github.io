document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // 필터 버튼 클릭 이벤트
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 활성화된 버튼 스타일 변경
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // 갤러리 아이템 필터링
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // 애니메이션 효과
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 이미지 로딩 최적화
    const images = document.querySelectorAll('.gallery-image img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Lightbox 기능
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
}); 