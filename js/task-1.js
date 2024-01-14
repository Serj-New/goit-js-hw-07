'use strict';

const categories = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${categories.length}`);
    
categories.forEach((category) => {
    const nameOfCategory = category.querySelector('h2').textContent;
    const countOfElem = category.querySelectorAll('li');
    console.log(`Category: ${nameOfCategory}`);
    console.log(`Elements: ${countOfElem.length}`);
});