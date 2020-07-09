"use strict";

const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));
let tooltip;
let toolLeft;
let toolBottom;

hasTooltip.forEach((tool) => {
  function createElement() {
    tooltip = document.createElement("div");
    tooltip.classList.add("tooltip", "tooltip_active");
    tooltip.textContent = tool.getAttribute("title");
    tooltip.style.left = toolLeft + "px";
    tooltip.style.top = toolBottom + "px";
    tool.insertAdjacentElement("afterend", tooltip);
  }

  tool.addEventListener("click", (event) => {
    event.preventDefault();

    toolLeft = tool.getBoundingClientRect().left;
    toolBottom = tool.getBoundingClientRect().bottom;

    if (document.querySelector(".tooltip")) {
      if (tool.nextElementSibling === tooltip) {
        tooltip.remove();
      } else {
        tooltip.remove();
        createElement();
      }
    } else {
      createElement();
    }
  });
});
