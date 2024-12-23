const mobileMenu = document.getElementById('mobile-menu');
const bar = document.querySelector('.bar');

mobileMenu.addEventListener('click', () => {
    bar.classList.toggle('active');
});