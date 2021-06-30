// //sticky header - https://codingreflections.com/hide-header-on-scroll-down/

// (function(){

//     var doc = document.documentElement;
//     var w = window;
  
//     var prevScroll = w.scrollY || doc.scrollTop;
//     var curScroll;
//     var direction = 0;
//     var prevDirection = 0;
  
//     var header = document.getElementById('sticky');
//     var headerBottom = header.offsetTop + header.offsetHeight;

//     var checkScroll = function() {
  
//       /*
//       ** Find the direction of scroll
//       ** 0 - initial, 1 - up, 2 - down
//       */
  
//       curScroll = w.scrollY || doc.scrollTop;
//       if (curScroll > prevScroll) { 
//         //scrolled up
//         direction = 2;
//       }
//       else if (curScroll < prevScroll) { 
//         //scrolled down
//         direction = 1;
//       }
  
//       if (direction !== prevDirection) {
//         toggleHeader(direction, curScroll);
//       }
      
//       prevScroll = curScroll;
//     };
  
//     var toggleHeader = function(direction, curScroll) {
//       if (direction === 2 && curScroll > 208) { 
          
//         header.classList.add('hide');
//         header.classList.remove('shown');
//         prevDirection = direction;
//       }
//       else if (direction === 1) {
//         header.classList.remove('hide');
//         header.classList.add('shown');
//         prevDirection = direction;
//       }
//     };
    
//     document.addEventListener('scroll', checkScroll);
// })();


// $('#scroll-container').on('scroll',function(event){
//   $('#sticky').css({top: $(this).scrollTop()});
// });

var lastScrollTop = 0;

$('#sticky-header').css({top: $(this).scrollTop()});

$('#scroll-container').scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    $('#sticky-header').slideUp(150);
   } else {
    
    $('#sticky-header').slideDown(150);
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

var menu = document.getElementById('burger-menu');
var lines = document.getElementById('burger-anim');
var mainContainer = document.getElementById('main');
var scrollContainer = document.getElementById('scroll-container');
var pageContainer = document.getElementById('page-container');
var sidebarOverlay = document.getElementById('sidebar-overlay');
var sidebar = document.getElementById('sidebar');

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
