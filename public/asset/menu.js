/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
      navToggle=document.getElementById("nav-toggle"),
      navClose=document.getElementById("nav-close")


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    console.log("hello click");
  navToggle.addEventListener("click",() =>{
    navMenu.classList.add("show-menu")
  })
}
if(navClose){
  navClose.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu")
  })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
