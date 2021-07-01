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


/*  find the scrollbar width, set 
    header width to page width minus scrollbar width.
    if Mozernizr detects a hidden scrollbar, sets width to 100%
 */

if (Modernizr.hiddenscroll === true) {
  $('#sticky-top').css("width", "100%");
} else {
  $('#sticky-top').css("width", scrollContainer.offsetWidth - scrollBarWidth);
}

$( window ).resize(function() {
  $('#sticky-top').css("width", scrollContainer.offsetWidth - scrollBarWidth);
});


/*  detects up or down scrolls, and hides/reveals
    the header respectively
 */
var lastScrollTop = 0;

$('#scroll-container').scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    $('#sticky-top').slideUp(150);
   } else {
    $('#sticky-top').slideDown(150);
   }
   lastScrollTop = st;
});


// owl carousel call

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    center: true,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true
  });
});


// cookie popup

var popup = document.getElementById('cookie-container');
var cookieSettings = document.getElementById('cookie-settings');
var cookieAccept = document.getElementById('cookie-accept');

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
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

  cookieAccept.addEventListener('click', function(e) {
    setCookie("accepted","true",30);
    scrollContainer.classList.remove('fixed-position');
    popup.classList.remove('shown');
    console.log("worked");
  });

}


// side menu

menu.addEventListener('click', function(e) {
  if (!lines.classList.contains('is-active')) {
    lines.classList.add('is-active');
    scrollContainer.classList.add('sidebar-shown');
    sidebarOverlay.classList.add('shown');
    sidebar.classList.add('shown');
  } else {
    lines.classList.remove('is-active');
    scrollContainer.classList.remove('sidebar-shown');
    sidebar.classList.remove('shown');
  }
});

sidebarOverlay.addEventListener('click', function(e) {
  if (lines.classList.contains('is-active')) {
    lines.classList.remove('is-active');
    scrollContainer.classList.remove('sidebar-shown');
    sidebarOverlay.classList.remove('shown');
    sidebar.classList.remove('shown');
  }
});


stickyMenu.addEventListener('click', function(e) {
  if (!stickyLines.classList.contains('is-active')) {
    stickyLines.classList.add('is-active');
    scrollContainer.classList.add('sidebar-shown');
    sidebarOverlay.classList.add('shown');
    sidebar.classList.add('shown');
  } else {
    stickyLines.classList.remove('is-active');
    scrollContainer.classList.remove('sidebar-shown');
    sidebar.classList.remove('shown');
  }
});



/* Sets submenu background to the width of the page
*/
function GetElementDistance(obj) {
  var div = document.getElementById('web-background');
  var topLen = div.getBoundingClientRect().top; // The distance (length) of div from the top of screen
  var bottomLen = div.getBoundingClientRect().bottom; // The distance (length) of div from the bottom of screen

  var leftLen = div.getBoundingClientRect().left; // The distance (length) of div from the left of screen
  var rightLen = div.getBoundingClientRect().right; // The distance (length) of div from the right of screen

return "topLength=" + topLen + "; bottomLen=" + bottomLen + "; leftLen=" + leftLen + "; rightLen=" + rightLen;
}
document.write(GetElementDistance("divId"));

