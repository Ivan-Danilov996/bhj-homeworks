"use strict";

const tasksInput = document.querySelector(".tasks__input");
const tasksAdd = document.querySelector(".tasks__add");
const tasksList = document.querySelector(".tasks__list");
let taskRemove;

function addTask() {
  tasksList.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `;

  taskRemove = Array.from(document.querySelectorAll(".task__remove"));
  tasksInput.value = "";
  taskRemove.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.remove();
    });
  });
}

tasksAdd.addEventListener("click", () => {
  if (tasksInput.value) {
    addTask();
  }
});

tasksAdd.addEventListener("keydown", (e) => {
  if (e.keyCode === 13 && tasksInput.value) {
    addTask();
  }
});
