"use strict";

const productQuantityControl = Array.from(
  document.querySelectorAll(".product__quantity-control")
);
const productQuantityValue = Array.from(
  document.querySelectorAll(".product__quantity-value")
);
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const cartProducts = document.querySelector(".cart__products");

productQuantityControl.forEach((control) => {
  control.addEventListener("click", () => {
    if (control.classList.contains("product__quantity-control_dec")) {
      if (control.nextElementSibling.textContent > 1) {
        control.nextElementSibling.textContent =
          parseInt(control.nextElementSibling.textContent) - 1;
      }
    }
    if (control.classList.contains("product__quantity-control_inc")) {
      control.previousElementSibling.textContent =
        parseInt(control.previousElementSibling.textContent) + 1;
    }
  });
});

productAdd.forEach((button) => {
  button.addEventListener("click", () => {
    if (Array.from(cartProducts.children).length > 0) {
      if (
        Array.from(cartProducts.children).some((product) => {
          return product.dataset.id === button.closest(".product").dataset.id;
        })
      ) {
        Array.from(cartProducts.children).forEach((product) => {
          if (product.dataset.id === button.closest(".product").dataset.id) {
            product.lastElementChild.textContent =
              parseInt(
                button.previousElementSibling.querySelector(
                  ".product__quantity-value"
                ).textContent
              ) + parseInt(product.lastElementChild.textContent);
          }
        });
      } else {
        cartProducts.innerHTML += `<div class="cart__product" data-id="${
          button.closest(".product").dataset.id
        }">
                        <img class="cart__product-image" src="${button
                          .closest(".product__controls")
                          .previousElementSibling.getAttribute("src")}">
                        <div class="cart__product-count">${
                          button.previousElementSibling.querySelector(
                            ".product__quantity-value"
                          ).textContent
                        }</div>
                    </div>`;
      }
    } else {
      cartProducts.innerHTML += `<div class="cart__product" data-id="${
        button.closest(".product").dataset.id
      }">
                <img class="cart__product-image" src="${button
                  .closest(".product__controls")
                  .previousElementSibling.getAttribute("src")}">
                <div class="cart__product-count">${
                  button.previousElementSibling.querySelector(
                    ".product__quantity-value"
                  ).textContent
                }</div>
            </div>`;
    }
  });
});
