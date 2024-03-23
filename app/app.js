"use strict";

document.querySelector(".hero-button").addEventListener("click", function () {
  document.querySelector(".backdrop").classList.toggle("is-open");
});

document
  .querySelector("#modal-close-button")
  .addEventListener("click", function () {
    document.querySelector(".backdrop").classList.remove("is-open");
  });

document
  .querySelector(".header-menu-button")
  .addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("is-open");
  });

document
  .querySelector("#mobile-menu-close-button")
  .addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("is-open");
  });
