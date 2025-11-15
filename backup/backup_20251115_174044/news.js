// 필터링 기능
const filterButtons = document.querySelectorAll('.filter-btn');
const newsItems = document.querySelectorAll('.news-item');
const searchInput = document.getElementById('newsSearch');

// 필터 버튼 클릭 이벤트
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // 활성 버튼 스타일 변경
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        // 뉴스 아이템 필터링
        newsItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'grid';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 검색 기능
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();

    newsItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('.news-description').textContent.toLowerCase();
        const category = item.querySelector('.news-category').textContent.toLowerCase();

        if (title.includes(searchTerm) || 
            description.includes(searchTerm) || 
            category.includes(searchTerm)) {
            item.style.display = 'grid';
        } else {
            item.style.display = 'none';
        }
    });
});

// 페이지네이션 기능
const paginationButtons = document.querySelectorAll('.pagination-button');

paginationButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('next')) {
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // 여기에 실제 페이지네이션 로직을 구현할 수 있습니다
        }
    });
}); 