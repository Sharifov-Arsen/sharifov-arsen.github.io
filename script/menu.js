AOS.init({
  once: true,
});

var iconMenu = document.querySelector('.menu__icon')
var menu__span = document.getElementById("menu__span")
var menuBurger = document.querySelector(".menu__burger")

let menu = document.querySelector(".menu");
let emptyMenu = document.querySelector(".empty-menu");

let menu__link1 = document.getElementById("menu__link1");
let menu__link2 = document.getElementById("menu__link2");
let menu__link3 = document.getElementById("menu__link3");
let menu__link4 = document.getElementById("menu__link4");
let menu__link5 = document.getElementById("menu__link5");
let menu__link6 = document.getElementById("menu__link6");
let header__phone = document.querySelectorAll(".header-phone");
let menu__shadow = document.querySelector(".menu-shadow");
if (iconMenu) {

  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle("_active");
    menuBurger.classList.toggle("_active");
  })
}
window.onscroll = function () {
  if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
    emptyMenu.style.position = "relative";
    menu.style.position = "fixed";
    menu.style.backgroundColor = "white";
    menu__shadow.style.opacity = "100";
    if (window.innerWidth > 767) {
      menu.style.color = "#363840";
      menu__link1.style.color = "#363840";
      menu__link2.style.color = "#363840";
      menu__link3.style.color = "#363840";
      menu__link4.style.color = "#363840";
      menu__link5.style.color = "#363840";
      menu__link6.style.color = "#363840";
      header__phone[0].style.color = "#363840";
      header__phone[1].style.color = "#363840";
    }
    if (window.innerWidth <= 767) {
      menu.style.color = "white";
      menu__span.style.backgroundColor = "black";
      let styleElem = document.head.appendChild(document.createElement("style"));
      styleElem.innerHTML = ".menu__icon::before {background: black;} .menu__icon::after {background: #363840;} .menu__burger._active::before {background: white;}";

    }
  } else {
    emptyMenu.style.position = "absolute";
    menu.style.position = "relative";
    menu.style.backgroundColor = "#363840";
    menu__shadow.style.opacity = "0";
    if (window.innerWidth > 767) {
      menu.style.color = "white";
      menu__link1.style.color = "white";
      menu__link2.style.color = "white";
      menu__link3.style.color = "white";
      menu__link4.style.color = "white";
      menu__link5.style.color = "white";
      menu__link6.style.color = "white";
      header__phone[0].style.color = "white";
      header__phone[1].style.color = "white";
    }
    if (window.innerWidth <= 767) {
      menu__span.style.backgroundColor = "white";
      let styleElem = document.head.appendChild(document.createElement("style"));
      styleElem.innerHTML = ".menu__icon::before {background: white;} .menu__icon::after {background: white;} .menu__burger._active::before {background: #363840;}";
    }
  }
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});