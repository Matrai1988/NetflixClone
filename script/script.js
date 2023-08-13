const popUp = document.getElementById("popUpContainer");
const mouseOverTriangle = document.getElementById("triangle");
const menu = document.getElementById("menu");
let timer;

//
mouseOverTriangle.onmouseover = function () {
  popUp.style.visibility = "visible";
};

mouseOverTriangle.onmouseout = function () {
  timer = setTimeout(function () {
    popUp.style.visibility = "hidden";
  }, 200);
};

menu.addEventListener("mouseenter", function () {
  clearTimeout(timer);
});

menu.addEventListener("mouseleave", function () {
  timer = setTimeout(function () {
    popUp.style.visibility = "hidden";
  }, 300);
});

// NOTIFICATION POPUP FUNCTION

const notificationBell = document.getElementById("notificationBell");
const sideMenuNotification = document.getElementById("sideMenuNotification");
let notificationTimer;

sideMenuNotification.style.visibility = "hidden";

notificationBell.addEventListener("mouseover", function () {
  clearTimeout(notificationTimer);
  sideMenuNotification.style.visibility = "visible";
});

notificationBell.addEventListener("mouseleave", function () {
  notificationTimer = setTimeout(function () {
    sideMenuNotification.style.visibility = "hidden";
  }, 200);
});

sideMenuNotification.addEventListener("mouseenter", function () {
  clearTimeout(notificationTimer);
});

sideMenuNotification.addEventListener("mouseleave", function () {
  notificationTimer = setTimeout(function () {
    sideMenuNotification.style.visibility = "hidden";
  }, 300);
});

// navbarContainer background changes  for scrolling

const navbarContainer = document.getElementById("navbarContainer");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    navbarContainer.style.background = "black";
  } else {
    navbarContainer.style.background = "transparent";
  }
});

//  SLIDER GALLERY UNDER THIS LINE

const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

function showPrevSlide() {
  currentIndex =
    (currentIndex - 1 + slides.children.length) % slides.children.length;
  updateSlide();
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  updateSlide();
}

function updateSlide() {
  const slideWidth = slides.children[0].clientWidth;
  slides.style.transition = "transform 0.5s ease-in-out";

  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  if (currentIndex === 0) {
    setTimeout(() => {
      slides.style.transition = "none";
      slides.style.transform = `translateX(0)`;
    }, 500);
  }
}
