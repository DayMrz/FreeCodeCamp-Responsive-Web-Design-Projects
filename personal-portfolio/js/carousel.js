const imgs = document.querySelector('#imgs')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')

const img = document.querySelectorAll('.img-carousel')

let idx = 0

function run() {
  idx++
  changeImage()
}

function changeImage() {
  if (idx > img.length -1) {
    idx = 0
  } else if (idx < 0){
    idx = img.length -1
  }

  imgs.style.transform = `translateX(${-idx * 100}%)`
}

rightBtn.addEventListener('click', () => {
  // console.log('click')
  idx++
  changeImage()
})

leftBtn.addEventListener('click', () => {
  idx--
  changeImage()
})
