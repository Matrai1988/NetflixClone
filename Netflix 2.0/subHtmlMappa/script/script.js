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
  if (scrollPosition > 1) {
    navbarContainer.style.background = "black";
  } else {
    navbarContainer.style.background = "transparent";
  }
});
