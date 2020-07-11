"use strict";

const items = document.getElementById("items");
let data;
let item;
let valute;

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    data = JSON.parse(xhr.responseText);
    document.querySelector(".loader").classList.remove("loader_active");

    for (let key in data.response.Valute) {
      valute = `
            <div class="item__code">
                ${data.response.Valute[key].CharCode}
            </div>
            <div class="item__value">
                ${data.response.Valute[key].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>`;

      if (!items.firstElementChild.children) {
        items.firstElementChild.insertAdjacentHTML("afterbegin", valute);
      } else {
        item = items.firstElementChild.cloneNode(false);
        item.innerHTML = valute;
        items.insertAdjacentElement("beforeend", item);
      }
    }
  }
};
