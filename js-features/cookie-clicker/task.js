"use strict";

const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
const cookie = document.getElementById("cookie");

let currentTime;
let prependTime;
let speed;
let counter = 0;

cookie.onclick = function () {
  clickerCounter.textContent = (
    parseInt(clickerCounter.textContent) + 1
  ).toString();

  if (cookie.width === 200) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }

  counter++;

  if (counter == 1) {
    prependTime = Date.now();
  } else {
    currentTime = Date.now();
    speed = 1 / ((currentTime - prependTime) / 1000);
    prependTime = currentTime;
  }

  clickerSpeed.textContent = speed;
};
