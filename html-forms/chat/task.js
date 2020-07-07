"use strict";

const chatWidget = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
const chatWidgetInput = document.querySelector(".chat-widget__input");
const messagesBot = ["Пока", "Добрый день", "Успехов", "Отлично"];
const chatWidgetMessages = document.querySelector(".chat-widget__messages");
let count = 0;
let id = undefined;

function getRandomMessage() {
  return Math.floor(Math.random() * messagesBot.length);
}

function getMinutes() {
  let minutes = String(new Date().getMinutes());
  if (minutes.length === 1) {
    minutes += "0";
    return minutes.split("").reverse().join("");
  }
  return minutes;
}

chatWidget.addEventListener("click", () => {
  chatWidget.classList.add("chat-widget_active");
});

chatWidgetInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13 && this.value) {
    clearInterval(id);
    count = 0;
    messages.innerHTML += `<div class="message message_client">
              <div class="message__time">
                  ${new Date().getHours()}:${new Date().getMinutes()}
              </div>
              <div class="message__text">
                  ${this.value}
              </div>
            </div>`;
    this.value = "";

    messages.innerHTML += `<div class="message">
              <div class="message__time">
                  ${new Date().getHours()}:${getMinutes()}
              </div>
              <div class="message__text">
                  ${messagesBot[getRandomMessage()]}
              </div>
            </div>`;

    chatWidgetMessages.lastElementChild.scrollIntoView(false);

    id = setInterval(() => {
      if (count >= 30) {
        messages.innerHTML += `<div class="message">
                      <div class="message__time">
                          ${new Date().getHours()}:${getMinutes()}
                      </div>
                      <div class="message__text">
                          ${"Уснул?"}
                      </div>
                    </div>`;
        chatWidgetMessages.lastElementChild.scrollIntoView(false);
        clearInterval(id);
        count = 0;
      } else {
        count++;
        console.log(count);
      }
    }, 1000);
  }
});
