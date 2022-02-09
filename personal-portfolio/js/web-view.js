const barsToggle = document.querySelector('#bars');
const nav = document.querySelector('.navbar');

barsToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible')
})
