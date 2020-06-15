"use strict";
let hh = "00";
let mm = "01";
let ss = "10";

const timer = document.getElementById("timer");
timer.textContent = `${hh}:${mm}:${ss}`;

function countDown() {
  if (ss == "00") {
    if (mm == "00") {
      if (hh == "00") {
        clearInterval(id);
        alert("Вы победили в конкурсе");
      } else {
        timer.textContent = `${hh = decrementCount(hh)}:${mm = '59'}:${ss = '59'}`;
      }
    } else {
      timer.textContent = `${hh}:${mm = decrementCount(mm)}:${ss = "59"}`;
    }
  } else {
    timer.textContent = `${hh}:${mm}:${ss = decrementCount(ss)}`;
  }
}
function decrementCount(data) {
    data = (parseInt(data) - 1).toString();
    if (data.length < 2) {
      data = "0" + data;
    }
    return data
}

//упрощенный вариант
/*
function countDown() {
    if(timer.textContent < 1) {
        clearInterval(id)
        alert('Вы победили в конкурсе')
    } else {
        timer.textContent--
    }
}*/

let id = setInterval(countDown, 1000);
