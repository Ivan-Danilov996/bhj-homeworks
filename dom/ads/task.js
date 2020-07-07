"use strict";

/******1******/

setInterval(() => {
  let rotator = document.querySelector(".rotator__case_active");
  if (rotator.nextElementSibling) {
    rotator.nextElementSibling.classList.add("rotator__case_active");
    rotator.classList.remove("rotator__case_active");
  } else {
    rotator.parentElement.firstElementChild.classList.add(
      "rotator__case_active"
    );
    rotator.classList.remove("rotator__case_active");
  }
}, 1000);

/******2******/
