'use strict';

const inputValue = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxWrapper = document.querySelector('#boxes');

const initialWidth = 30;
const initialHeight = 30;
const factor = 10;

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();

    const arr = [];
  
    for (let i = 0; i < amount; i++) {
      const width = initialWidth + factor * i;
      const height = initialHeight + factor * i;
      const square = document.createElement("div");
  
      square.style.width = `${width}px`;
      square.style.height = `${height}px`;
      square.style.backgroundColor = getRandomHexColor();
  
      arr.push(square);
    }
  
    boxWrapper.append(...arr);
    boxWrapper.style.backgroundColor = '#F6F6FE'
  
    inputValue.value = '';
  };
};

createBtn.addEventListener("click", () => {
  createBoxes(inputValue.value);
});

function destroyBoxes() {
  boxWrapper.innerHTML = '';
  boxWrapper.style.backgroundColor = 'transparent';
};

destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}