AOS.init({
  once: true,
});

//carrousel
let carrousel = document.getElementById("carrousel");
let carrouselImgNumb = 1;
let time_line = document.getElementById("carrousel__time-line");

let nav1 = document.getElementById("nav_1");
let nav2 = document.getElementById("nav_2");
let nav3 = document.getElementById("nav_3");
let nav4 = document.getElementById("nav_4");

let iconMenu = document.querySelector('.menu__icon')
let menu__span = document.getElementById("menu__span")
let menuBurger = document.querySelector(".menu__burger")

let menu = document.querySelector(".menu");
let emptyMenu = document.querySelector(".empty-menu");

let sliderImg = document.getElementById("slider-img");

let menu__link1 = document.getElementById("menu__link1");
let menu__link2 = document.getElementById("menu__link2");
let menu__link3 = document.getElementById("menu__link3");
let menu__link4 = document.getElementById("menu__link4");
let menu__link5 = document.getElementById("menu__link5");
let menu__link6 = document.getElementById("menu__link6");
let header__phone = document.querySelectorAll(".header-phone");
let menu__shadow = document.querySelector(".menu-shadow");

let dish3 = document.getElementById("dish3");
let dish4 = document.getElementById("dish4");
let dish5 = document.getElementById("dish5");
let dish6 = document.getElementById("dish6");
let dish7 = document.getElementById("dish7");
let dish8 = document.getElementById("dish8");

document.getElementById("nav_" + carrouselImgNumb).style.backgroundColor = "aqua";

function changeImgCarrousel() {

  if (carrouselImgNumb < 4) {
    carrouselImgNumb++;
  } else {
    carrouselImgNumb = 1;
  }
  carrousel.style.backgroundImage = "url(../image/carrousel_" + carrouselImgNumb + ".png)";
  nav1.style.backgroundColor = "rgba(205, 214, 219, 0)";
  nav2.style.backgroundColor = "rgba(205, 214, 219, 0)";
  nav3.style.backgroundColor = "rgba(205, 214, 219, 0)";
  nav4.style.backgroundColor = "rgba(205, 214, 219, 0)";
  document.getElementById("nav_" + carrouselImgNumb).style.backgroundColor = "aqua";

}
setInterval(changeImgCarrousel, 6000);

//carrousel-nav
function carrousel_nav(x) {
  carrouselImgNumb = x - 1;
  changeImgCarrousel();
  nav1.style.backgroundColor = "rgba(205, 214, 219, 0)";
  nav2.style.backgroundColor = "rgba(205, 214, 219, 0)";
  nav3.style.backgroundColor = "rgba(205, 214, 219, 0)";
  nav4.style.backgroundColor = "rgba(205, 214, 219, 0)";
  document.getElementById("nav_" + x).style.backgroundColor = "aqua";
}

//anchors
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    if (iconMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock')
      iconMenu.classList.remove("_active");
      menuBurger.classList.remove("_active");
    }
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })

}

//menu burger


if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle("_active");
    menuBurger.classList.toggle("_active");
  })
}

// slider-services

const sliderS = document.querySelector('.slider');
const sliderSImg = document.querySelectorAll('.slider img');

//buttons 
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn')

//counter
let counter = 1;
let size = sliderSImg[0].clientWidth;

sliderS.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listener

nextBtn.addEventListener('click', () => {
  size = sliderSImg[0].clientWidth;
  if (counter >= sliderSImg.length - 1) return;
  sliderS.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  sliderS.style.transform = 'translateX(' + (-size * counter) + 'px)';
  changeSliderText();
})
prevBtn.addEventListener('click', () => {
  size = sliderSImg[0].clientWidth;
  if (counter <= 0) return;
  sliderS.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  sliderS.style.transform = 'translateX(' + (-size * counter) + 'px)';
  changeSliderText();
})

sliderS.addEventListener('transitionend', () => {
  if (sliderSImg[counter].id === 'lastClone') {
    sliderS.style.transition = 'none';
    counter = sliderSImg.length - 2;
    sliderS.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (sliderSImg[counter].id === 'firstClone') {
    sliderS.style.transition = 'none';
    counter = sliderSImg.length - counter;
    sliderS.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})

//change text
let sliderArticle = document.getElementById('slider_article');
let sliderText = document.getElementById('slider_text');
changeSliderText();
function changeSliderText(){
  if (sliderSImg[counter].id === 'firstClone' || sliderSImg[counter].id === 'slider1') {
  sliderArticle.innerHTML = "Смачний ланч";
  sliderText.innerHTML = "Якщо ви хочете смачно поЇсти , то ми можемо вам запропонувати \"Смачний ланч\"";
}
if (sliderSImg[counter].id === 'slider2') {
  sliderArticle.innerHTML = "Весілля";
  sliderText.innerHTML = "Якщо ви бажаєте провести своє весілля незабутньо , то вам до нас!";
}
if (sliderSImg[counter].id === 'lastClone' || sliderSImg[counter].id === 'slider3') {
  sliderArticle.innerHTML = "Застілля";
  sliderText.innerHTML = "Ви можете забронювати столик і гарно провести вечір у команії друзів або родини.";
}}

// scroll
window.onscroll = function () {
  myFunction()
};

function myFunction() {
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

//hide dish
if (window.innerWidth > 897 && window.innerWidth <= 1195) {
  dish1.style.display = "block";
  dish2.style.display = "block";
  dish3.style.display = "block";
  dish4.style.display = "block";
  dish5.style.display = "block";
  dish6.style.display = "block";
  dish7.style.display = "none";
  dish8.style.display = "none";
}
if (window.innerWidth > 598 && window.innerWidth <= 897) {
  dish1.style.display = "block";
  dish2.style.display = "block";
  dish3.style.display = "block";
  dish4.style.display = "block";
  dish5.style.display = "none";
  dish6.style.display = "none";
  dish7.style.display = "none";
  dish8.style.display = "none";
}
if (window.innerWidth <= 598) {
  dish3.style.display = "none";
  dish4.style.display = "none";
  dish5.style.display = "none";
  dish6.style.display = "none";
  dish7.style.display = "none";
  dish8.style.display = "none";
}
if (window.innerWidth > 1195) {
  dish1.style.display = "block";
  dish2.style.display = "block";
  dish3.style.display = "block";
  dish4.style.display = "block";
  dish5.style.display = "block";
  dish6.style.display = "block";
  dish7.style.display = "block";
  dish8.style.display = "block";
}


window.addEventListener('resize', function (event) {
  size = sliderSImg[0].clientWidth;
  sliderS.style.transform = 'translateX(' + (-size * counter) + 'px)';
  if (window.innerWidth > 897 && window.innerWidth <= 1195) {
    dish1.style.display = "block";
    dish2.style.display = "block";
    dish3.style.display = "block";
    dish4.style.display = "block";
    dish5.style.display = "block";
    dish6.style.display = "block";
    dish7.style.display = "none";
    dish8.style.display = "none";
  }
  if (window.innerWidth > 598 && window.innerWidth <= 897) {
    dish1.style.display = "block";
    dish2.style.display = "block";
    dish3.style.display = "block";
    dish4.style.display = "block";
    dish5.style.display = "none";
    dish6.style.display = "none";
    dish7.style.display = "none";
    dish8.style.display = "none";
  }
  if (window.innerWidth <= 598) {
    dish3.style.display = "none";
    dish4.style.display = "none";
    dish5.style.display = "none";
    dish6.style.display = "none";
    dish7.style.display = "none";
    dish8.style.display = "none";
  }
  if (window.innerWidth > 1195) {
    dish1.style.display = "block";
    dish2.style.display = "block";
    dish3.style.display = "block";
    dish4.style.display = "block";
    dish5.style.display = "block";
    dish6.style.display = "block";
    dish7.style.display = "block";
    dish8.style.display = "block";
  }
}, true);

function closeMenu(initial){
  const menu = document.getElementsByClassName("menu")[0];
  const menuWrapper = document.getElementsByClassName("menu__wrapper")[0];
  const menuPart1 = document.getElementsByClassName("menu__part-1")[0];
  const menuPart2 = document.getElementsByClassName("menu__part-2")[0];
  const buttonMenu = document.getElementsByClassName("buttonMenu")[0];
  const isMenuOpen = localStorage.getItem("isMenuOpen") || false
  console.log(isMenuOpen)
  if(initial){
    if (isMenuOpen === 'true'){
 
      menu.style.height = "64px";
      menuWrapper.style.height = "64px";
      menuPart1.style.display = "block"
      menuPart2.style.display = "block"
      buttonMenu.innerHTML = "close"
    }
    else if (isMenuOpen === 'false') {
      menu.style.height = "30px";
      menuWrapper.style.height = "30px";
      menuPart1.style.display = "none"
      menuPart2.style.display = "none"
      buttonMenu.innerHTML = "open"
    }
  }
  if (isMenuOpen === 'true' && !initial){
    menu.style.height = "30px";
    menuWrapper.style.height = "30px";
    localStorage.setItem('isMenuOpen', false);
    menuPart1.style.display = "none"
    menuPart2.style.display = "none"
    buttonMenu.innerHTML = "open"
  }
  else if (isMenuOpen === 'false' && !initial) {
    menu.style.height = "64px";
    menuWrapper.style.height = "64px";
    localStorage.setItem('isMenuOpen', true);
    menuPart1.style.display = "block"
    menuPart2.style.display = "block"
    buttonMenu.innerHTML = "close"
  }
}