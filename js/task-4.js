'use strict';

const registerForm = document.querySelector('.login-form');
const clickBut = document.querySelector('button');

registerForm.addEventListener("submit", event => {
    event.preventDefault();

    const form = event.target;
    const userEmail = form.elements.email.value;
    const userPassword = form.elements.password.value;
   
    if (userEmail === "" || userPassword === "") {
        return alert("All form fields must be filled in");
    }

    const user = {
        email: userEmail.trim(),
        password: userPassword.trim()
    };

    console.log(user);

    form.reset();   
});