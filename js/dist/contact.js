"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var oohBtn = document.querySelector(".out-of-hours-btn");
var oohText = document.querySelector(".hidden-contact-text");
var mapBtns = document.querySelectorAll('.map-btn');
var maps = document.querySelectorAll('.offices-map');
var nameField = document.getElementById("name");
var emailField = document.getElementById("email");
var phoneField = document.getElementById("phone_number");
var subjectField = document.getElementById("subject");
var messageField = document.getElementById("message");
var submitBtn = document.getElementById("submit");
var formMsg = document.getElementById("formMessage");
var messageText = document.getElementById("messageText");
var closeMsg = document.querySelector("#close-message"); // show or hide out of hours IT support text

oohBtn.addEventListener('click', function () {
  oohText.classList.toggle("shown");
}); // show or hide maps under map cards

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
  if (formMsg.classList.contains("error")) {
    formMsg.classList.remove("error");
  } else if (formMsg.classList.contains("success")) {
    formMsg.classList.remove("success");
  }
}); /// client-side validation section
// track the current phone value, only allow certain characters

var currentPhoneValue = phoneField.value || ''; //track the cursor position

var selection = {};
phoneField.addEventListener('input', function (e) {
  var allowedChars = /^[0-9\s\+\(\)]*$/;
  var target = e.target;

  if (allowedChars.test(target.value)) {
    currentPhoneValue = target.value;
  } else {
    // if user enters a disallowed character
    // restore the value and selection
    target.value = currentPhoneValue;
    target.setSelectionRange(selection.selectionStart, selection.selectionEnd);
  }
}); // function to set error message

function addErrorMessage(errorArray) {
  var errorMessageVar = "Error in the following fields: ".concat(errorArray.join(", "));

  if (formMsg.classList.contains("success")) {
    formMsg.classList.remove("success");
  } else if (formMsg.classList.contains("error")) {
    formMsg.classList.remove("error");
  }

  formMsg.classList.add("error");
  messageText.innerHTML = errorMessageVar;
}

;

function clientValidate() {
  var errorArray = [];
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var phoneRegex = /^(((\(\+44\)\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/; // creates an array of all the field values

  var fieldArray = {
    "name": nameField,
    "phone": phoneField,
    "email": emailField,
    "subject": subjectField,
    "message": messageField
  }; // loops through the fields and adds errors to the errorArray
  // also adds the error class to the input field for 3 seconds

  for (var _i = 0, _Object$entries = Object.entries(fieldArray); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        field = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (field == "name" && !value.value) {
      errorArray.push(field);
      nameField.classList.add("fieldError");
      setTimeout(function () {
        nameField.classList.remove("fieldError");
      }, 3000);
    }

    if (field == "phone" && !phoneRegex.test(value.value)) {
      errorArray.push(field);
      phoneField.classList.add("fieldError");
      setTimeout(function () {
        phoneField.classList.remove("fieldError");
      }, 3000);
    }

    if (field == "email" && !emailRegex.test(value.value)) {
      errorArray.push(field);
      emailField.classList.add("fieldError");
      setTimeout(function () {
        emailField.classList.remove("fieldError");
      }, 3000);
    }

    if (field == "subject" && !value.value) {
      errorArray.push(field);
      subjectField.classList.add("fieldError");
      setTimeout(function () {
        subjectField.classList.remove("fieldError");
      }, 3000);
    }

    if (field == "message" && !value.value) {
      errorArray.push(field);
      messageField.classList.add("fieldError");
      setTimeout(function () {
        messageField.classList.remove("fieldError");
      }, 3000);
    }
  }

  if (errorArray.length > 0) {
    // adds a new error message using the error array
    addErrorMessage(errorArray);
    setTimeout(function () {
      window.location = ("" + window.location).replace(/#[A-Za-z0-9_-]*$/, '') + "#message-jump";
    }, 1);
    return false;
  } else {
    return true;
  }
} // event listener for the button, 


submitBtn.addEventListener('click', function (e) {
  if (!clientValidate()) {
    e.preventDefault();
  }
});

if (formMsg.classList.contains("error") || formMsg.classList.contains("success")) {
  setTimeout(function () {
    window.location = ("" + window.location).replace(/#[A-Za-z0-9_-]*$/, '') + "#message-jump";
  }, 1);
}