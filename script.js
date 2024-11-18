// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetElement.offsetTop - 50,  // Adjust 50px for any fixed navbar offset
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button Visibility
const scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form Validation
document.querySelector("#contact-form").addEventListener("submit", function (event) {
    const name = document.querySelector("#contact-form input[name='name']").value;
    const email = document.querySelector("#contact-form input[name='email']").value;
    const message = document.querySelector("#contact-form textarea[name='message']").value;

    if (!name || !email || !message) {
        event.preventDefault();  // Prevent form submission if validation fails
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        event.preventDefault();  // Prevent form submission if email is invalid
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for contacting us!");
});

// Simple Email Validation
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
