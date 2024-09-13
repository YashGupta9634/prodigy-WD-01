// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const initialBackgroundColor = '#333';
    const scrolledBackgroundColor = '#222';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = scrolledBackgroundColor;
        } else {
            navbar.style.backgroundColor = initialBackgroundColor;
        }
    });
});