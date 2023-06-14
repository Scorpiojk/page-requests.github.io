
// Animation for scrolling down and up and animate the navbar

let theEnd = 0,
    navBar = document.getElementById("nav-menu");

window.addEventListener("scroll", function (){
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        if(scrollTop > theEnd){
            navBar.style.top = '-85px'
        } else {
            navBar.style.top = '0';
        }
        theEnd = scrollTop;
})


// script.js
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function toggleHamburger() {
    navMenu.classList.toggle("show");
  }

  links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

hamburgerBtn.addEventListener("click", toggleHamburger);