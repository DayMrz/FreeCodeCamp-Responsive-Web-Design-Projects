const barsToggle = document.querySelector('.fas');
const nav = document.querySelector('#nav-bar');

barsToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible')
})