"use strict";

window.addEventListener("scroll", function () {
  Array.from(document.querySelectorAll(".reveal")).forEach((element) => {
    if (window.innerHeight > element.getBoundingClientRect().bottom) {
      element.classList.add("reveal_active");
    }
  });
});
