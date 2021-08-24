const oohBtn = document.querySelector(".out-of-hours-btn");
const oohText = document.querySelector(".hidden-contact-text");
const mapBtns = document.querySelectorAll('.map-btn');
const maps = document.querySelectorAll('.offices-map');
const msgBox = document.querySelector(".message");
const closeMsg = document.querySelector("#close-message");


// show or hide out of hours IT support text

oohBtn.addEventListener('click', function() {
    oohText.classList.toggle("shown");
});


// show or hidemaps under map cards

mapBtns.forEach(function(button, i) {
    button.addEventListener('click', function() {
        maps[i].classList.toggle("shown");
        if (button.children[0].getAttribute("class") == "fas fa-chevron-down") {
            button.children[0].setAttribute("class", "fas fa-chevron-up");
        } else {
            button.children[0].setAttribute("class", "fas fa-chevron-down");
        }
    });
});


// close the message box

closeMsg.addEventListener("click", function() {
    msgBox.style.display = "none";
});