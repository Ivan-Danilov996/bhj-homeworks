"use strict";

const tasksInput = document.querySelector(".tasks__input");
const tasksAdd = document.querySelector(".tasks__add");
const tasksList = document.querySelector(".tasks__list");

function addTask() {
  tasksList.insertAdjacentHTML(
    "beforeend",
    `
      <div class="task">
          <div class="task__title">
              ${tasksInput.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
      </div>`
  );

  tasksList.lastElementChild.lastElementChild.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
  });

  tasksInput.value = "";
}

tasksAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (tasksInput.value) {
    addTask();
  }
});

tasksAdd.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.keyCode === 13 && tasksInput.value) {
    addTask();
  }
});
