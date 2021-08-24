const oohBtn = document.querySelector(".out-of-hours-btn");
const oohText = document.querySelector(".hidden-contact-text");
const mapBtns = document.querySelectorAll('.map-btn');
const maps = document.querySelectorAll('.offices-map');
const msgBox = document.querySelector(".message");
const closeMsg = document.querySelector("#close-message");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone_number");
const inputSubject = document.querySelector("#subject");
const inputMessage = document.querySelector("#message");

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


// validation for the form

// function validateForm() {
//     let formName = document.forms.contact_form.name.value;
//     if (formName == "" || formName == " ") {
//         inputName.style.border = "1px solid red";
//         return false;
//     }

//     let formEmail = document.forms.contact_form.email.value;
//     if (formEmail == "" || formEmail == " ") {
//         inputEmail.style.border = "1px solid red";
//         return false;
//     }

//     let formPhone = document.forms.contact_form.phone_number.value;
//     if (formPhone == "" || formPhone == " ") {
//         inputPhone.style.border = "1px solid red";
//         return false;
//     }

//     let formSubject = document.forms.contact_form.subject.value;
//     if (formSubject == "" || formSubject == " ") {
//         inputSubject.style.border = "1px solid red";
//         return false;
//     }

//     let formMessage = document.forms.contact_form.message.value;
//     if (formMessage == "" || formMessage == " ") {
//         inputMessage.style.border = "1px solid red";
//         return false;
//     }

//     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (re.test(formEmail == false)) {
//         inputEmail.style.border = "1px solid red";
//         return re.test(formEmail);
//     }

// }
