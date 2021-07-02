"use strict";

var menu = document.getElementById('burger-menu');
var lines = document.getElementById('burger-anim');
var stickyMenu = document.getElementById('sticky-burger-menu');
var stickyLines = document.getElementById('sticky-burger-anim');
var mainContainer = document.getElementById('main');
var scrollContainer = document.getElementById('scroll-container');
var pageContainer = document.getElementById('page-container');
var sidebarOverlay = document.getElementById('sidebar-overlay');
var sidebar = document.getElementById('sidebar');
var scrollBarWidth = scrollContainer.offsetWidth - scrollContainer.clientWidth;
var mainMenu = document.getElementsByClassName('main-menu');
var subMenu = document.getElementsByClassName('nav-sub');
var subBg = document.getElementsByClassName('sub-bg');
/*  find the scrollbar width, set 
    header width to page width minus scrollbar width.
    if Mozernizr detects a hidden scrollbar, sets width to 100%
 */

if (Modernizr.hiddenscroll === true) {
  $('#sticky-top').css("width", "100%");
} else {
  $('#sticky-top').css("width", scrollContainer.offsetWidth - scrollBarWidth);
}

$(window).resize(function () {
  $('#sticky-top').css("width", scrollContainer.offsetWidth - scrollBarWidth);
});
/*  detects up or down scrolls, and hides/reveals
    the header respectively
 */

var lastScrollTop = 0;
$('#scroll-container').scroll(function (event) {
  var st = $(this).scrollTop();

  if (st > lastScrollTop && st >= 208) {
    $('#sticky-top').slideUp(150);
  } else {
    $('#sticky-top').slideDown(150);
  }

  lastScrollTop = st;
}); // owl carousel call

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    center: true,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true
  });
}); // cookie popup

var popup = document.getElementById('cookie-container');
var cookieSettings = document.getElementById('cookie-settings');
var cookieAccept = document.getElementById('cookie-accept');

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

if (getCookie("accepted") === "" || getCookie("accepted") === null) {
  popup.classList.add('shown');
  document.body.classList.add('fixed-position');
  cookieAccept.addEventListener('click', function (e) {
    setCookie("accepted", "true", 30);
    scrollContainer.classList.remove('fixed-position');
    popup.classList.remove('shown');
    console.log("worked");
  });
} // side menu


stickyMenu.addEventListener('click', function (e) {
  if (!stickyLines.classList.contains('is-active')) {
    stickyLines.classList.add('is-active');
    scrollContainer.classList.add('sidebar-shown');
    sidebarOverlay.classList.add('shown');
    sidebar.classList.add('shown');
  } else {
    stickyLines.classList.remove('is-active');
    scrollContainer.classList.remove('sidebar-shown');
    sidebarOverlay.classList.remove('shown');
    sidebar.classList.remove('shown');
  }
});
sidebarOverlay.addEventListener('click', function (e) {
  if (stickyLines.classList.contains('is-active')) {
    stickyLines.classList.remove('is-active');
    scrollContainer.classList.remove('sidebar-shown');
    sidebarOverlay.classList.remove('shown');
    sidebar.classList.remove('shown');
  }
});
/* Finds the distance to the left and right of the screen
   returns an array [left, right]
*/

function GetElementDistance(obj) {
  var leftLen = obj.getBoundingClientRect().left; // The distance (length) of div from the left of screen

  var rightLen = obj.getBoundingClientRect().right; // The distance (length) of div from the right of screen

  return [leftLen, rightLen];
}
/*  sets the submenu background to stick to the left side of the page
    then sets its width to the page width minus the scrollbar
    does this on every mouseover event in case the screen size has changed
    will reset the left distance back to 0 each time, to allow it to recalculate
    the distance on each event (otherwise it will set it to 0 on every other hover)
*/


Array.from(mainMenu).forEach(function (mainMenu, index) {
  mainMenu.addEventListener('mouseenter', function () {
    var leftDistance = "-" + GetElementDistance(subBg[index])[0] + "px";
    var contClientMinusDist = scrollContainer.clientWidth - leftDistance;
    var contOffsetMinusDist = scrollContainer.offsetWidth - leftDistance;

    if (Modernizr.hiddenscroll === true) {
      $('.sub-bg').css({
        "width": scrollContainer.offsetWidth,
        "left": leftDistance
      });
    } else {
      $('.sub-bg').css({
        "width": scrollContainer.clientWidth,
        "left": leftDistance
      });
    }
  });
  mainMenu.addEventListener('mouseleave', function () {
    $('.sub-bg').css({
      "left": "0px"
    });
  });
});