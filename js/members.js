// 탭 기능
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.student-grid');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 모든 탭 버튼에서 active 클래스 제거
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // 클릭된 버튼에 active 클래스 추가
        button.classList.add('active');

        // 모든 탭 콘텐츠 숨기기
        tabContents.forEach(content => {
            content.style.display = 'none';
        });

        // 선택된 탭 콘텐츠 표시
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'grid';
    });
}); 