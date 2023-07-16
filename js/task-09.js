const changeButton = document.querySelector('.change-color');
let currentColor = document.querySelector('.color');
const pageBody = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


changeButton.addEventListener('click', changeColor);

function changeColor(event) {
  pageBody.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = pageBody.style.backgroundColor;
}

