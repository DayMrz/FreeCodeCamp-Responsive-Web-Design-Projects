const barsToggle = document.querySelector('#bars')
const nav = document.querySelector('.navbar')


let showMenu = false

barsToggle.addEventListener('click', toggleMenu);


function toggleMenu() {
  if (!showMenu) {
    nav.classList.toggle('nav-visible')
    barsToggle.classList.add('icon-close')
    barsToggle.classList.remove('icon-bars')
    showMenu = true
  } else {
    nav.classList.remove('nav-visible')
    barsToggle.classList.add('icon-bars')
    showMenu = false
  }
}

function reveal() {
  const reveals = document.querySelectorAll('.reveal')
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


const colorTheme = document.querySelector('#color-theme span')
const setButtons = document.querySelectorAll('.icon-btn-set')

colorTheme.addEventListener('click', lightTheme)

function lightTheme() {
        console.log('keep')
    document.body.classList.toggle('light')
}