"use strict";

var oohBtn = document.querySelector(".out-of-hours-btn");
var oohText = document.querySelector(".hidden-contact-text");
var mapBtns = document.querySelectorAll('.map-btn');
var maps = document.querySelectorAll('.offices-map');
var msgBox = document.querySelector(".message");
var closeMsg = document.querySelector("#close-message"); // show or hide out of hours IT support text

oohBtn.addEventListener('click', function () {
  oohText.classList.toggle("shown");
}); // show or hidemaps under map cards

mapBtns.forEach(function (button, i) {
  button.addEventListener('click', function () {
    maps[i].classList.toggle("shown");

    if (button.children[0].getAttribute("class") == "fas fa-chevron-down") {
      button.children[0].setAttribute("class", "fas fa-chevron-up");
    } else {
      button.children[0].setAttribute("class", "fas fa-chevron-down");
    }
  });
}); // close the message box

closeMsg.addEventListener("click", function () {
  msgBox.style.display = "none";
});