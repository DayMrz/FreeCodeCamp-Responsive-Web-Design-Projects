function swapStyleSheet(sheet) {
    document.querySelector("#pagestyle").setAttribute("href", sheet);
}

function initiate() {
    const printStyle = document.querySelector("#print-style-sheet");
    const defaultStyle =document.querySelector("#default-style-sheet");

    printStyle.onclick = function () {swapStyleSheet("./stylesheet/print-view.css")}
    defaultStyle.onclick = function () {swapStyleSheet("./stylesheet/web-view.css")}
}

window.onload = initiate;


// function toggleClass(span) {
//     span.className ='icon-sun-o'
// }

// const $light = document.querySelector('#Light');
// const $dark = document.querySelector('#Dark');

// const toggleBtn = document.querySelector('#toggleBtn')

// const toggleBtn = document.querySelector('#toggle-btn');






// $light.addEventListener('click', lightTheme);
// $dark.addEventListener('click', darkTheme);

// function lightTheme() {
//     document.body.classList.toggle('light');
//     $dark.hidden = false
//     $light.hidden = true
// }

// function darkTheme() {
//     document.body.classList.toggle('dark');
    // $dark.hidden = true
    // $light.hidden = false
// }



// import "./styles.css";

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
// });