"use strict";

const interestCheck = Array.from(document.querySelectorAll(".interest__check"));

interestCheck.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.checked) {
      Array.from(
        element.closest(".interest").querySelectorAll("ul .interest__check")
      ).forEach((el) => {
        el.checked = true;
      });
    } else {
      Array.from(
        element.closest(".interest").querySelectorAll("ul .interest__check")
      ).forEach((el) => {
        el.checked = false;
      });
    }
  });
});
