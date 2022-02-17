const barsToggle = document.querySelector('#bars')
const nav = document.querySelector('.navbar')

barsToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible')
})

const settingBtn = document.querySelector('#icon-setting')
const settingList = document.querySelector('.settings-list')

settingBtn.addEventListener('click', () => {
  settingList.classList.toggle('setting--visible');
})

// function settingButton(change) {
//     if (change.style.backgroundColor === 'transparent') {
//       change.style.backgroundColor = 'hsl(237, 63%, 71%)'
//     } else change.style.backgroundColor = 'transparent';
//   }



// function scrollSetting() {
//   if (settingList === 'nav--visible') {
//     settingBtn.style.top = '10em'
//   }
// }

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     // document.querySelector("#navbar").style.top = "0";
//     nav.style.top = '0'
//   } else {
//     nav.style.top = '1000px'
//     // document.querySelector('#navbar').style.top = "-500px";

//   }
//   prevScrollpos = currentScrollPos
// }

// function settingButton(change) {
//   if (change.style.backgroundColor === 'default') {
//     change.style.backgroundColor = 'hsl(237, 63%, 71%)'
//   } else change.style.backgroundColor = 'default';
// }


