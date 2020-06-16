"use strict";

const modalMain = document.getElementById("modal_main");
const modalClose = Array.from(
  document.querySelectorAll(".modal__close.modal__close_times")
);
const show = document.querySelector(".show-success");
const modalSuccess = document.getElementById("modal_success");

modalMain.classList.add("modal_active");

modalClose.map((element) => {
  return element.onclick = () => {
      element.parentElement.parentElement.classList.remove("modal_active")
}
})

show.onclick = () => {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
}