// Contact Form Handler with multiple submission options
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (!form) return;

    // Configuration - Users should replace these with their own credentials
    const EMAIL_CONFIG = {
        // Option 1: EmailJS (Recommended)
        // Sign up at https://www.emailjs.com/
        emailjs: {
            serviceId: 'YOUR_EMAILJS_SERVICE_ID',
            templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
            publicKey: 'YOUR_EMAILJS_PUBLIC_KEY'
        },
        // Option 2: Formspree (Alternative - Easy Setup)
        // Sign up at https://formspree.io/ and replace YOUR_FORM_ID
        formspree: {
            endpoint: 'https://formspree.io/f/YOUR_FORM_ID'
        },
        // Fallback email
        fallbackEmail: 'agtech@sejong.ac.kr'
    };

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };

        try {
            // Check if Formspree is configured
            if (!EMAIL_CONFIG.formspree.endpoint.includes('YOUR_FORM_ID')) {
                // Use Formspree
                const response = await fetch(EMAIL_CONFIG.formspree.endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    showMessage('Message sent successfully! We will get back to you soon.', 'success');
                    form.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            }
            // Check if EmailJS is configured
            else if (typeof emailjs !== 'undefined' && !EMAIL_CONFIG.emailjs.serviceId.includes('YOUR_')) {
                // Use EmailJS
                emailjs.init(EMAIL_CONFIG.emailjs.publicKey);

                const response = await emailjs.send(
                    EMAIL_CONFIG.emailjs.serviceId,
                    EMAIL_CONFIG.emailjs.templateId,
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        subject: formData.subject,
                        message: formData.message
                    }
                );

                if (response.status === 200) {
                    showMessage('Message sent successfully! We will get back to you soon.', 'success');
                    form.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            }
            // Fallback to mailto
            else {
                const mailtoLink = `mailto:${EMAIL_CONFIG.fallbackEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                )}`;

                window.location.href = mailtoLink;
                showMessage('Opening your email client... To enable automatic sending, please configure EmailJS or Formspree (see js/contact.js).', 'info');

                setTimeout(() => {
                    form.reset();
                }, 1000);
            }

        } catch (error) {
            console.error('Error:', error);
            showMessage('Failed to send message. Please try using the Google Form link below or email us directly at ' + EMAIL_CONFIG.fallbackEmail, 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
});
