
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    hamburgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });
});


// Form Validation
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    // Retrieve form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const gemstone = document.getElementById('gemstone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate fields
    if (!name || !email || !gemstone || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simple Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for your submission!');
    document.getElementById('orderForm').reset(); // Clear form
});
