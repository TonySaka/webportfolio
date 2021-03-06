
const menu = document.querySelector("#mobile_menu");
const navMenu = document.querySelector(".navbar__menu");
const navLogo = document.querySelector('navbar_logo')

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    const contactMenu = document.querySelector('#contact-page')
    let scrollPos = window.scrollY
    console.log(scrollPos);
}

//addss highlight' class to menu items
if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
} else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    servicesMenu.classList.remove('highlight')
    return
} else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
}
if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
    elem.classList.remove('highlight');
};

window.addEventListener('scroll' , highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu when clicking on menu item
const hideMobileMenu = () => {
    const MenuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 768 && MenuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
 




