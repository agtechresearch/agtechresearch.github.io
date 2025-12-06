// 네비게이션 토글
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // 모바일 메뉴 토글 (다른 페이지)
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // 메뉴 항목 클릭 시 메뉴 닫기 (다른 페이지)
    if (navMenu) {
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
    }

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

    // 뇌 파티클 애니메이션 초기화
    initBrainAnimation();
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

// =============================================================================
// 뇌 파티클 애니메이션 & 내비게이션 아이콘 변환
// =============================================================================

// 파티클 클래스
class Particle {
    constructor(x, y, canvas) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.canvas = canvas;
        // 화면 크기에 따른 기본 파티클 크기 조정
        const sizeScale = Math.min(canvas.width, canvas.height) / 800;
        this.size = (Math.random() * 2 + 1) * sizeScale;
        this.baseSize = this.size;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = 'rgba(255, 255, 255, 0.4)';
        this.waveIntensity = 0; // 물결 강도
        this.wavePhase = 0; // 물결 위상 (전파 거리)
    }

    update() {
        // 미세한 떨림 효과
        this.x += this.speedX;
        this.y += this.speedY;

        // 원래 위치로 복귀하는 힘
        const dx = this.baseX - this.x;
        const dy = this.baseY - this.y;
        this.x += dx * 0.05;
        this.y += dy * 0.05;

        // 물결 효과 감소
        if (this.waveIntensity > 0) {
            this.waveIntensity *= 0.95; // 서서히 감소
            this.wavePhase += 1; // 위상 진행
        }

        // 크기 업데이트 - 크기 증가량 감소
        const sizeBoost = this.waveIntensity * 0.8;
        this.size = this.baseSize + sizeBoost;
    }

    draw(ctx) {
        // 기본 파티클
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // 물결 강도에 따라 글로우 효과 - 크기 감소
        if (this.waveIntensity > 0.1) {
            const glowAlpha = this.waveIntensity * 0.4;
            ctx.fillStyle = `rgba(0, 217, 255, ${glowAlpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    triggerWave(intensity, phase) {
        this.waveIntensity = Math.max(this.waveIntensity, intensity);
        this.wavePhase = phase;
    }
}

// 뇌 파티클 애니메이션 초기화
function initBrainAnimation() {
    const canvas = document.getElementById('brainCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let waves = []; // 물결 전파 관리
    let lastWaveTime = 0; // 마지막 물결 생성 시간
    let waveInterval = 15; // 물결 생성 간격 (ms) - 훨씬 더 빠르게
    let connectionDistance = 80; // 연결 거리 기본값
    let baseLineWidth = 0.5; // 기본 선 굵기
    let glowLineWidth = 1; // 글로우 선 굵기 기본값

    // 캔버스 크기 설정
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // 화면 크기에 따라 연결 거리와 선 굵기 조정
        const canvasSize = Math.min(canvas.width, canvas.height);
        if (canvasSize < 400) {
            // 매우 작은 화면 (갤럭시 폴드 등)
            connectionDistance = 40;
            baseLineWidth = 0.3;
            glowLineWidth = 0.6;
        } else if (canvasSize < 600) {
            // 작은 모바일
            connectionDistance = 50;
            baseLineWidth = 0.35;
            glowLineWidth = 0.7;
        } else if (canvasSize < 768) {
            // 모바일
            connectionDistance = 60;
            baseLineWidth = 0.4;
            glowLineWidth = 0.8;
        } else if (canvasSize < 1024) {
            // 태블릿
            connectionDistance = 70;
            baseLineWidth = 0.45;
            glowLineWidth = 0.9;
        } else {
            // 데스크톱
            connectionDistance = 80;
            baseLineWidth = 0.5;
            glowLineWidth = 1;
        }

        initParticles();
    }

    // 뇌 모양 파티클 생성
    function initParticles() {
        particles = [];
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radiusX = Math.min(canvas.width, canvas.height) * 0.35;
        const radiusY = Math.min(canvas.width, canvas.height) * 0.3;

        // 화면 크기에 따른 파티클 개수 조정 - 화면을 최대한 채우도록
        const area = canvas.width * canvas.height;
        const density = 0.0002; // 픽셀당 파티클 밀도
        let particleCount = Math.floor(area * density);

        // 최소/최대 제한
        particleCount = Math.max(200, Math.min(particleCount, 600));

        // 타원형 뇌 실루엣 내에 파티클 배치
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.sqrt(Math.random()) * radiusX;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius * (radiusY / radiusX);
            particles.push(new Particle(x, y, canvas));
        }
    }

    // 물결 생성 함수
    function createWave(x, y, intensity = 1.0, maxRadius = 300) {
        waves.push({
            x: x,
            y: y,
            radius: 0,
            maxRadius: maxRadius,
            speed: 3,
            intensity: intensity
        });
    }

    // 마우스 이동 시 연속 물결 효과
    function handleMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;

        // 시간 기반 throttling으로 연속적인 물결 생성
        const currentTime = Date.now();
        if (currentTime - lastWaveTime >= waveInterval) {
            // 화면 크기에 따라 물결 범위 조정
            let maxRadius, intensity;
            if (canvas.width < 600) {
                // 작은 모바일
                maxRadius = 150;
                intensity = 0.8;
            } else if (canvas.width < 768) {
                // 모바일
                maxRadius = 200;
                intensity = 0.9;
            } else if (canvas.width < 1024) {
                // 태블릿
                maxRadius = 250;
                intensity = 1.0;
            } else {
                // 데스크톱
                maxRadius = 350;
                intensity = 1.2;
            }

            createWave(mouseX, mouseY, intensity, maxRadius);
            lastWaveTime = currentTime;
        }
    }

    // 물결 업데이트 및 전파
    function updateWaves() {
        waves = waves.filter(wave => {
            wave.radius += wave.speed;
            wave.intensity *= 0.98; // 강도 감소

            // 물결 범위 내의 파티클에 영향
            particles.forEach(particle => {
                const dx = particle.x - wave.x;
                const dy = particle.y - wave.y;
                const distanceToParticle = Math.sqrt(dx * dx + dy * dy);

                // 물결이 파티클 근처를 지나갈 때
                const waveFrontDistance = Math.abs(distanceToParticle - wave.radius);
                if (waveFrontDistance < 30) { // 물결 두께
                    const localIntensity = wave.intensity * (1 - waveFrontDistance / 30);
                    particle.triggerWave(localIntensity, wave.radius);
                }
            });

            return wave.radius < wave.maxRadius && wave.intensity > 0.01;
        });
    }

    // 애니메이션 루프
    function animate() {
        ctx.fillStyle = 'rgba(17, 17, 17, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 물결 업데이트
        updateWaves();

        // 파티클 업데이트 및 그리기
        particles.forEach(particle => {
            particle.update();
        });

        // 파티클 간 연결선 그리기 (물결 기반)
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    // 두 파티클의 평균 물결 강도로 선 밝기 결정
                    const avgIntensity = (p1.waveIntensity + p2.waveIntensity) / 2;
                    const baseOpacity = 0.1;
                    const waveOpacity = avgIntensity * 0.6;
                    const totalOpacity = baseOpacity + waveOpacity;

                    // 물결이 강할수록 선이 밝고 두껍게
                    if (avgIntensity > 0.1) {
                        // 밝은 청록색 글로우 - 화면 크기에 따라 선 굵기 조정
                        ctx.strokeStyle = `rgba(0, 217, 255, ${waveOpacity * 0.8})`;
                        ctx.lineWidth = glowLineWidth + avgIntensity * 2;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }

                    // 기본 흰색 선 - 화면 크기에 따라 선 굵기 조정
                    ctx.strokeStyle = `rgba(255, 255, 255, ${totalOpacity})`;
                    ctx.lineWidth = baseLineWidth;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }

        // 파티클 그리기 (선 위에 표시)
        particles.forEach(particle => {
            particle.draw(ctx);
        });

        requestAnimationFrame(animate);
    }

    // 이벤트 리스너 - hero 섹션 전체에서 작동
    const heroSection = canvas.parentElement;
    heroSection.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    // 초기화
    resizeCanvas();
    animate();
}
