// Effet sticky de la navbar

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Fonction du burger menu

const menuHamburger = document.getElementById("menu-hamburger")
const navLinks = document.getElementById("nav-links")
const body = document.body
        
menuHamburger.addEventListener('click',()=>{navLinks.classList.toggle('mobile-menu'), body.classList.toggle('scroll-block')})

// Activer les liens

var links = document.getElementsByClassName("link");

function setActiveLink(index) {
    for (let i = 0; i < links.length; i++) {
		document.getElementById("link-" + (i+1)).classList.remove("active");
    }

	document.getElementById("link-" + index).classList.add("active");
}
