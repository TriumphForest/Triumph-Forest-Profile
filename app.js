const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navlogo = document.querySelector('#navbar__logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
            
const highlightMenu = () => {
   const element = document.querySelector('.highlight');
   const homeMenu = document.querySelector('#home-page')
   const bioMenu = document.querySelector('#bio-page')
   const experienceMenu = document.querySelector('#experience-page')
   let scrollPos = window.scrollY
   
   // adds 'highlight' class to menu items

   if(window.innerWidth > 960 && scrollPos < 600) {
     homeMenu.classList.add('highlight');
     bioMenu.classList.remove('highlight');
     
     return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
      bioMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      experienceMenu.classList.remove('highlight');
       return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
      experienceMenu.classList.add('highlight');
      bioMenu.classList.remove('highlight');
      return;
    }

    if((element && window.innerWidth < 960 && scrollPos < 600) || element) {
        element.classList.remove('highlight');
    }

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile Menu when clicking on item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navlogo.addEventListener('click', hideMobileMenu);