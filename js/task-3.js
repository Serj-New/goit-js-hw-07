'use strict';

const inputText = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

inputText.addEventListener("input", (evt) => {
    const nameValue = evt.currentTarget.value.trim();

    if (nameValue === '') {
        userName.textContent = 'Anonymous';
    } else {
        userName.textContent = nameValue;
    }
});