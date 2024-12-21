document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const globalNav = document.querySelector('.global-nav');

    hamburger.addEventListener('click', () => {
        globalNav.classList.toggle('open');
    });
});