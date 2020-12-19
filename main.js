const images = document.querySelectorAll(".images");

const nav1 = document.querySelector(".close");
var sidenav = document.querySelector(".side-nav");
const gallery = document.querySelector(".gallery");
const topnav = document.querySelector(".top-nav");
const services = document.querySelector(".services");
var navlinks1 = document.querySelectorAll(".nav-links1");
const innerList = document.querySelector(".inner-list");
const removeexpand = document.querySelectorAll(".inner-list li");
const first = document.querySelector(".first");
const first1 = document.querySelector(".first + ul");
const second = document.querySelector(".second");
const second1 = document.querySelector(".second + ul");
const third = document.querySelector(".third");
const third1 = document.querySelector(".third + ul");
const fourth = document.querySelector(".fourth");
const fourth1 = document.querySelector(".fourth + ul");
const list1 = document.querySelectorAll(".listitem1");
const list2 = document.querySelectorAll(".listitem2");
const list3 = document.querySelectorAll(".listitem3");
const list4 = document.querySelectorAll(".listitem4");
const changelisttext = document.querySelectorAll(".nav-links1 li a");
//  side nav elements

var h = document.createElement("H1");
var cakes = document.createTextNode("cakes");
var flower = document.createTextNode("flower");
var plants = document.createTextNode("plants");
var christmas = document.createTextNode("christmas");
var gifts = document.createTextNode("gifts");
var occassions = document.createTextNode("occassions");

images.forEach((item) => {
  gallery.style.opacity = "1";
  
  item.addEventListener("click", open);
  item.addEventListener("click", function (e) {
    var x = e.target;
    innerList.style.marginLeft = "7rem";
    if (x.classList[0] == "img1") {
      h.innerText = "cakes";
      nav1.insertAdjacentElement("afterend", h);
      sidenav.style.top = "40%";
      services.scrollIntoView();
      first.innerText = "occassions";
      second.innerText = "flavours";
      innerList.style.marginLeft = "6.2rem";
    } else if (x.classList[0] == "img2") {
      h.innerText = "flowers";
      nav1.insertAdjacentElement("afterend", h);
      sidenav.style.top = "40%";
      services.scrollIntoView();
      first.innerText = "arrangements";
      second.innerText = "occassions";
    } else if (x.classList[0] == "img3") {
      h.innerText = "plants";
      nav1.insertAdjacentElement("afterend", h);
      sidenav.style.top = "60%";
      sidenav.scrollIntoView();
      first.innerText = "arrangements";
      second.innerText = "occassions";
    } else if (x.classList[0] == "img4") {
      h.innerText = "christmas";
      nav1.insertAdjacentElement("afterend", h);
      sidenav.style.top = "60%";
      first.innerText = "arrangements";
      second.innerText = "occassions";
      sidenav.scrollIntoView();
    } else if (x.classList[0] == "img5") {
      h.innerText = "gifts";
      nav1.insertAdjacentElement("afterend", h);
      first.innerText = "arrangements";
      second.innerText = "occassions";
      sidenav.style.top = "80%";
      sidenav.scrollIntoView();
    } else if (x.classList[0] == "img6") {
      h.innerText = "occassions";
      nav1.insertAdjacentElement("afterend", h);
      first.innerText = "arrangements";
      second.innerText = "occassions";
      sidenav.style.top = "80%";
      sidenav.scrollIntoView();
    }
    
  });
  
});

function open() {
  sidenav.classList.toggle("side-nav-open");
  gallery.classList.toggle("shrink");
}
nav1.addEventListener("click", close);

function close() {
  sidenav.classList.toggle("side-nav-open");
}

//scroll  top nav-bar

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector("nav").classList.add("activescroll");
  } else {
    document.querySelector("nav").classList.remove("activescroll");
    document.querySelector("nav").classList.add("activescrollremove");
  }
}

//  side nav bar wrapper

var ul = document.createElement("ul");
var li = document.createElement("li");

first.addEventListener("mouseover", expand1);
second.addEventListener("mouseenter", expand2);
third.addEventListener("mouseover", expand3);
fourth.addEventListener("mouseover", expand4);

function expand1() {
  first1.classList.toggle("inner-list-open");
  second1.classList.remove("inner-list-open");
  third1.classList.remove("inner-list-open");
  fourth1.classList.remove("inner-list-open");
}

function expand2() {
  second1.classList.toggle("inner-list-open");
  first1.classList.remove("inner-list-open");
  third1.classList.remove("inner-list-open");
  fourth1.classList.remove("inner-list-open");
}

function expand3() {
  third1.classList.toggle("inner-list-open");
  first1.classList.remove("inner-list-open");
  second1.classList.remove("inner-list-open");
  fourth1.classList.remove("inner-list-open");
}

function expand4() {
  fourth1.classList.toggle("inner-list-open");
  first1.classList.remove("inner-list-open");
  second1.classList.remove("inner-list-open");
  third1.classList.remove("inner-list-open");
}

removeexpand.forEach((item) => {
  item.addEventListener("mouseleave", removewrapper);
});
function removewrapper() {
  first1.classList.remove("inner-list-open");
  second1.classList.remove("inner-list-open");
  fourth1.classList.remove("inner-list-open");
  third1.classList.remove("inner-list-open");
}
