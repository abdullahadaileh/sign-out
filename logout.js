document.addEventListener('DOMContentLoaded', (event) => {
    const logoutForm = document.getElementById('logoutForm');
    logoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Logged out successfully!');
        window.location.href = 'signin.html'; // تعديل هذا الرابط ليتوافق مع صفحة تسجيل الدخول الخاصة بك
    });

    const signinLink = document.getElementById('signinLink');
    signinLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'signin.html'; // تعديل هذا الرابط ليتوافق مع صفحة تسجيل الدخول الخاصة بك
    });
});
