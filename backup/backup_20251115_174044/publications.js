// 필터링 기능
const filterButtons = document.querySelectorAll('.filter-button');
const publicationItems = document.querySelectorAll('.publication-item');
const searchInput = document.getElementById('searchInput');

// 필터 버튼 클릭 이벤트
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 모든 버튼에서 active 클래스 제거
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 클릭된 버튼에 active 클래스 추가
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // 논문 필터링 (연도별)
        publicationItems.forEach(item => {
            const yearElem = item.querySelector('.publication-year');
            const year = yearElem ? yearElem.textContent.trim() : '';
            if (filter === 'all' || year === filter) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 검색 기능
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    publicationItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const authors = item.querySelector('.authors')?.textContent.toLowerCase() || '';
        const content = item.querySelector('.publication-content').textContent.toLowerCase();

        if (title.includes(searchTerm) || authors.includes(searchTerm) || content.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}); 