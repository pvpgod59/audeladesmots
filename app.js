// Effet sticky de la navbar

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var marginDiv = document.getElementById("margin")

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        marginDiv.classList.add("active");
    } else {
        navbar.classList.remove("sticky");
        marginDiv.classList.remove("active");
    }
}

// Fonction du burger menu

const menuHamburger = document.getElementById("menu-hamburger")
const navLinks = document.getElementById("nav-links")
const body = document.body
        
menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
    body.classList.toggle('scroll-block');
})

function disableBurger(){
    navLinks.classList.remove('mobile-menu');
    body.classList.remove('scroll-block');
}

// Activer les liens

var links = document.getElementsByClassName("link");

function setActiveLink(index) {
    for (let i = 0; i < links.length; i++) {
		document.getElementById("link-" + (i+1)).classList.remove("active");
    }

	document.getElementById("link-" + index).classList.add("active");
}

// SLIDER

