"use strict";

const editor = document.getElementById("editor");
const button = document.getElementById("button");

if (localStorage.data) {
  editor.value = localStorage.data;
}

editor.addEventListener("input", () => {
  localStorage.data = editor.value;
});

button.addEventListener("click", () => {
  localStorage.clear();
  editor.value = "";
});
