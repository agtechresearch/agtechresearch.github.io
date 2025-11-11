// 네비게이션 토글
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // 모바일 메뉴 토글
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // 메뉴 항목 클릭 시 메뉴 닫기
    document.querySelectorAll('.nav-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle) {
                navToggle.classList.remove('active');
            }
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            body.style.overflow = '';
        });
    });

    // ESC 키로 메뉴 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // 화면 크기 변경 시 메뉴 상태 초기화
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (navToggle) navToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Particle 애니메이션 초기화
    initParticleAnimation();
});

// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
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
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
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

// Particle 애니메이션
function initParticleAnimation() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const hero = document.querySelector('.hero');
    
    let particles = [];
    let mouse = { x: null, y: null };
    let mouseParticle = null; // 마우스 위치의 점
    const maxDistance = 150; // 점들 사이 연결 거리
    const particleCount = 240; // 점 개수 (3배 증가)

    // 캔버스 크기 설정
    function resizeCanvas() {
        if (hero) {
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle 클래스
    class Particle {
        constructor(x, y) {
            this.x = x !== undefined ? x : Math.random() * canvas.width;
            this.y = y !== undefined ? y : Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.8; // 속도 증가
            this.vy = (Math.random() - 0.5) * 0.8; // 속도 증가
            this.radius = 0.25; // 선 굵기(0.5)의 절반으로 지름이 0.5가 되어 선 굵기와 동일
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // 경계 처리
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            // 경계 내로 제한
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(136, 136, 136, 0.7)'; // 이전과 현재 사이의 진하기
            ctx.fill();
        }

        drawConnection(other) {
            const dx = this.x - other.x;
            const dy = this.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                // 거리에 따라 투명도 조절 (가까울수록 진하게)
                const opacity = 1 - (distance / maxDistance);
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(other.x, other.y);
                ctx.strokeStyle = `rgba(136, 136, 136, ${opacity * 0.6})`; // 이전과 현재 사이의 진하기
                ctx.lineWidth = 0.5; // 점 크기와 동일하게
                ctx.stroke();
            }
        }
    }

    // 파티클 생성
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // 마우스 위치 추적
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        
        // 마우스 위치에 점 생성 (없으면)
        if (!mouseParticle) {
            mouseParticle = new Particle(mouse.x, mouse.y);
            mouseParticle.vx = 0;
            mouseParticle.vy = 0;
            particles.push(mouseParticle);
        } else {
            // 이미 있으면 위치만 업데이트
            mouseParticle.x = mouse.x;
            mouseParticle.y = mouse.y;
        }
    });

    hero.addEventListener('mouseleave', () => {
        // 마우스가 떠나면 점 제거
        if (mouseParticle) {
            const index = particles.indexOf(mouseParticle);
            if (index > -1) {
                particles.splice(index, 1);
            }
            mouseParticle = null;
        }
        mouse.x = null;
        mouse.y = null;
    });

    // 애니메이션 루프
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 파티클 업데이트 및 그리기
        particles.forEach(particle => {
            if (particle !== mouseParticle) {
                particle.update();
            }
            particle.draw();
        });

        // 점들 사이 연결선 그리기
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                particles[i].drawConnection(particles[j]);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

