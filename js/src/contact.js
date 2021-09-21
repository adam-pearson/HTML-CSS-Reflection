const oohBtn = document.querySelector(".out-of-hours-btn");
const oohText = document.querySelector(".hidden-contact-text");
const mapBtns = document.querySelectorAll('.map-btn');
const maps = document.querySelectorAll('.offices-map');


const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone_number");
const subjectField = document.getElementById("subject");
const messageField = document.getElementById("message");
const submitBtn = document.getElementById("submit");
const formMsg = document.getElementById("formMessage");
const messageText = document.getElementById("messageText");
const closeMsg = document.querySelector("#close-message");

// show or hide out of hours IT support text

oohBtn.addEventListener('click', function() {
    oohText.classList.toggle("shown");
});


// show or hide maps under map cards

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
    if (formMsg.classList.contains("error")) {
        formMsg.classList.remove("error");
    } else if (formMsg.classList.contains("success")) {
        formMsg.classList.remove("success");
    }
});


/// client-side validation section


// track the current phone value, only allow certain characters
let currentPhoneValue = phoneField.value || '';
//track the cursor position
const selection = {};
phoneField.addEventListener('input', function(e) {

    
    const allowedChars = /^[0-9\s\+\(\)]*$/;
    const target = e.target;

    if (allowedChars.test(target.value)) {
        currentPhoneValue = target.value;
    } else {
        // if user enters a disallowed character
        // restore the value and selection
        target.value = currentPhoneValue;
        target.setSelectionRange(
            selection.selectionStart,
            selection.selectionEnd
        );
    }
});

// function to set error message
function addErrorMessage(errorArray) {
    const errorMessageVar = `Error in the following fields: ${errorArray.join(", ")}`;
    if (formMsg.classList.contains("success")) {
        formMsg.classList.remove("success");
    } else if (formMsg.classList.contains("error")) {
        formMsg.classList.remove("error");
    }
    formMsg.classList.add("error");
    messageText.innerHTML = errorMessageVar;
};

function clientValidate() {
    let errorArray = [];
    const emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^(((\(\+44\)\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;

    // creates an array of all the field values
    let fieldArray = {
        "name": nameField,
        "phone": phoneField,
        "email": emailField,
        "subject": subjectField,
        "message": messageField,
    };

    // loops through the fields and adds errors to the errorArray
    // also adds the error class to the input field for 3 seconds

    for (const [field, value] of Object.entries(fieldArray)) {
        if (field == "name" && !value.value) {
            errorArray.push(field);
            nameField.classList.add("fieldError");
            setTimeout(function() {
                nameField.classList.remove("fieldError");
            }, 3000);
        }
        if (field == "phone" && !phoneRegex.test(value.value)) {
            errorArray.push(field);
            phoneField.classList.add("fieldError");
            setTimeout(function() {
                phoneField.classList.remove("fieldError");
            }, 3000);
        }
        if (field == "email" && !emailRegex.test(value.value)) {
            errorArray.push(field);
            emailField.classList.add("fieldError");
            setTimeout(function() {
                emailField.classList.remove("fieldError");
            }, 3000);
        }
        if (field == "subject" && !value.value) {
            errorArray.push(field);
            subjectField.classList.add("fieldError");
            setTimeout(function() {
                subjectField.classList.remove("fieldError");
            }, 3000);
        }
        if (field == "message" && !value.value) {
            errorArray.push(field);
            messageField.classList.add("fieldError")
            setTimeout(function() {
                messageField.classList.remove("fieldError");
            }, 3000);
        }
    }

    if (errorArray.length > 0) {
        // adds a new error message using the error array
        addErrorMessage(errorArray);
        setTimeout(function() {window.location = (""+window.location).replace(/#[A-Za-z0-9_-]*$/,'')+"#message-jump"}, 1);
        return false;
    } else {
        return true;
    }
}

// event listener for the button, 
submitBtn.addEventListener('click', function(e) {
    if (!clientValidate()) {
        e.preventDefault();
    }
});

if (formMsg.classList.contains("error") || formMsg.classList.contains("success")) {
    setTimeout(function() {window.location = (""+window.location).replace(/#[A-Za-z0-9_-]*$/,'')+"#message-jump"}, 1);
}