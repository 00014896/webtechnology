//loader
"use strict";
var preloader = document.querySelector(".preloader"),
  headerCont = document.querySelector(".header");
preloader &&
  ((headerCont.style.display = "none"),
  document.body.classList.add("loaded_hiding"),
  window.setTimeout(function () {
    document.body.classList.add("loaded"),
      document.body.classList.remove("loaded_hiding"),
      (headerCont.style.display = "flex");
  }, 2000));

// burger menu button
let menuBtn = document.querySelector(".menu1-btn");
let menu = document.querySelector(".menu1");
let menuList = document.querySelector(".menu1 a");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
