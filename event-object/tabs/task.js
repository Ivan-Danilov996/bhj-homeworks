"use strict";

const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));

let getActiveTab;
let getActiveContent;

tab.forEach((element) => {
  element.addEventListener("click", () => {
    let id = tab.indexOf(element);
    console.log(id);

    getActiveTab = document.querySelector(".tab_active");
    getActiveContent = document.querySelector(".tab__content_active");

    if (getActiveTab) {
      getActiveTab.classList.remove("tab_active");
      getActiveContent.classList.remove("tab__content_active");
      element.classList.add("tab_active");
      tabContent[id].classList.add("tab__content_active");
    }
  });
});
