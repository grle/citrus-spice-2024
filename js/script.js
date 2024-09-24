// MENU
let boolMenu = false;
let mobile = document.getElementsByClassName("mobile-menu");

function toggleMenu() {
  let ham = document.getElementById("hamburger-1");
  ham.classList.toggle("is-active");

  if (boolMenu == false) {
    mobile[0].classList.add("visibility");
    boolMenu = true;
  }
  else if (boolMenu == true) {
    mobile[0].classList.remove("visibility");
    boolMenu = false;
  }
}

//ICON
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("nav-bar").style.padding = "30px 10px";
    document.getElementById("logo").style.height = "50px";
  } else {
    // document.getElementById("nav-bar").style.padding = "80px 10px";
    document.getElementById("logo").style.height = "115px";
  }
}