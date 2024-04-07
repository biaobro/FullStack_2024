'use strict';

// add event listener on multiple elements
const addEventOnElements = function(elements, eventType, callback){
    for(let i = 0, len = elements.length; i < len; i ++){
        elements[i].addEventListener(eventType, callback)
    }
}

// Navbar toggle for mobile
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active")
}

addEventOnElements(navTogglers, "click", toggleNavbar)

const header = document.querySelector("[data-header]")

window.addEventListener("scroll", function(){
    if(window.scrollY > 100){
        header.classList.add("active");
    }else{
        header.classList.remove("active")
    }
})