"use strict";

const subscribeModal = document.getElementById("subscribe-modal");

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

if (!getCookie("active")) {
  subscribeModal.classList.add("modal_active");
}

subscribeModal.querySelector(".modal__close").addEventListener("click", () => {
  subscribeModal.classList.remove("modal_active");
  document.cookie = "active=false";
});
