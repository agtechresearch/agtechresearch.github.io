// 네비게이션 토글
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // 모바일 메뉴 토글
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // 메뉴 항목 클릭 시 메뉴 닫기
    document.querySelectorAll('.nav-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // ESC 키로 메뉴 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // 화면 크기 변경 시 메뉴 상태 초기화
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });
});

// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // 모바일 메뉴가 열려있을 경우 닫기
            navMenu.classList.remove('active');
        }
    });
});

// 스크롤 애니메이션
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 애니메이션을 적용할 요소들
document.querySelectorAll('.research-card, .news-card').forEach(el => {
    observer.observe(el);
}); 