// When the user scrolls the page, execute myFunction
window.onscroll = function() { sticky_scroll() };

// Get the navbar
var navbar = document.getElementById("topnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky_scroll() { 
    
    if (window.pageYOffset >= sticky) {
   
        navbar.classList.add("sticky")
    
    } else {
   
        navbar.classList.remove("sticky");
    
    }
  
}