"use strict";

const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");
let question;
let button;
let response;
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    question = JSON.parse(xhr.responseText);
    pollTitle.textContent = question.data.title;

    for (let key in question.data.answers) {
      button = document.createElement("button");
      button.classList.add("poll__answer");
      button.textContent = question.data.answers[key];
      pollAnswers.insertAdjacentElement("beforeend", button);
      button.addEventListener("click", (event) => {
        alert("Спасибо, ваш голос засчитан!");

        xhr.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php ");
        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        xhr.send(
          `vote=${question.id}&answer=${Array.from(
            pollAnswers.children
          ).indexOf(event.currentTarget)}`
        );
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            response = JSON.parse(xhr.responseText);
            pollAnswers.innerHTML = "";
            for (let i = 0; i < response.stat.length; i++) {
              pollAnswers.insertAdjacentHTML(
                "beforeend",
                `
                        ${response.stat[i].answer}: ${response.stat[i].votes}% <br>
                        `
              );
            }
          }
        };
      });
    }
  }
};
