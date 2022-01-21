const $light = document.querySelector('#Light');
const $dark = document.querySelector('#Dark');
const $btnTheme = document.querySelector('.Btn-theme');



$light.addEventListener('click', lightTheme);
$dark.addEventListener('click', darkTheme);

function lightTheme() {
    document.body.classList.toggle('light');
    $dark.hidden = false
    $light.hidden = true
}

function darkTheme() {
    document.body.classList.toggle('dark');
    // $dark.hidden = true
    // $light.hidden = false
}



// import "./styles.css";

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
// });