// 문의 양식 제출 처리
const inquiryForm = document.getElementById('inquiryForm');

inquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 폼 데이터 수집
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    try {
        // 여기에 실제 서버로 데이터를 전송하는 코드를 추가해야 합니다
        // 예시: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
        
        // 성공 메시지 표시
        alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
        
        // 폼 초기화
        inquiryForm.reset();
    } catch (error) {
        // 에러 메시지 표시
        alert('문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        console.error('Error:', error);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 폼 데이터 수집
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // 여기에 실제 폼 제출 로직을 구현할 수 있습니다
        // 예: 이메일 전송, 서버에 데이터 저장 등
        console.log('Form submitted:', formData);

        // 성공 메시지 표시
        alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.');

        // 폼 초기화
        contactForm.reset();
    });
}); 