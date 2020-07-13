"use strict";

const signinForm = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const signin = document.querySelector(".signin");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  welcome.classList.toggle("welcome_active");
  button.classList.toggle("button-active");
  signin.classList.toggle("signin_active");
  localStorage.removeItem("user_id");
  Array.from(signin.querySelectorAll("input")).forEach((input) => {
    input.value = "";
  });
});

let data;

function showWelcome() {
  welcome.classList.toggle("welcome_active");
  welcome.firstElementChild.textContent = localStorage.user_id;
  button.classList.toggle("button-active");
}

if (localStorage.user_id) {
  showWelcome();
} else {
  signin.classList.toggle("signin_active");
}

signinForm.addEventListener("submit", (e) => {
  const formData = new FormData(signinForm);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", " https://netology-slow-rest.herokuapp.com/auth.php");

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState == xhr.DONE && this.status == 200) {
      data = JSON.parse(this.responseText);
      if (data.success) {
        localStorage.user_id = data.user_id;
        showWelcome();
        signin.classList.toggle("signin_active");
      } else {
        alert("Неверный пароль");
      }
    }
  });

  xhr.send(formData);

  e.preventDefault();
});
