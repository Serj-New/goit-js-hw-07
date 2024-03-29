'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

changeBtn.addEventListener("click", evt => {
  const color = getRandomHexColor();
  body.setAttribute("style", `background-color: ${color}`);
  colorValue.textContent = `${color}`;
});