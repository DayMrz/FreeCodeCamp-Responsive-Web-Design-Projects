const barsToggle = document.querySelector('#bars')
const nav = document.querySelector('.navbar')
const barsIcon = document.querySelector('.icon-bars')

let showMenu = false

barsToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    nav.classList.toggle('nav--visible')
    barsToggle.classList.add('icon-close')
    barsToggle.classList.remove('icon-bars')
    showMenu = true
  } else {
    nav.classList.remove('nav--visible')
    barsToggle.classList.add('icon-bars')
    showMenu = false
  }
}

const settingBtn = document.querySelector('#icon-setting')
const settingList = document.querySelector('.settings-list')

settingBtn.addEventListener('click', () => {
  settingList.classList.toggle('setting--visible');
})

