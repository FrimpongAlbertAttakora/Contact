// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Getting li's
var abt = document.getElementById("abt");
var port = document.getElementById("port");
var skill = document.getElementById("skill");
var cont = document.getElementById("cont");

// Get the about page
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var skills = document.getElementById("skills");
var footer = document.getElementById("foot");

// Get the offset position of the navbar
var sticky = about.offsetTop;
var sticky2 = portfolio.offsetTop;
var sticky3 = skills.offsetTop;
var sticky4 = footer.offsetTop;

// Get the header page
var heaDer = document.getElementById("head");

// Get the offset position of the header page
var vanish = heaDer.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > vanish) {
    h1_1.classList.add("vanish");

      if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
          abt.classList.add("abt1");
        } else {
          navbar.classList.remove("sticky");
          abt.classList.remove("abt1");
        }

      if(window.pageYOffset >= sticky2) {
          port.classList.add("port1");
          abt.classList.remove("abt1");
        } else {
          port.classList.remove("port1");
        }

      if(window.pageYOffset >= sticky3) {
          skill.classList.add("skill1");
          port.classList.remove("port1");
        } else {
          skill.classList.remove("skill1");
        }

      if(window.pageYOffset >= sticky4) {
          cont.classList.add("cont1");
          skill.classList.remove("skill1");
        } else {
          cont.classList.remove("cont1");
        }
        
  }
   else { 
     h1_1.classList.remove("vanish");
  }
}


/* open and close */
//window.onload(document.getElementById('side-menu').style.visibility = 'hidden');

function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeSideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

// Close the side bar when the body is clicked

var sideClose = document.getElementById('container');
sideClose.addEventListener('dblclick', closeSideMenu);

function closeSideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}



