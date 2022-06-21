
const menu = document.querySelector("#mobile_menu");
const navMenu = document.querySelector(".navbar__menu");

const mobileMenu = () => {
    menu.classList.toggle("active")
    navMenu.classList.toggle("active")
}

menu.addEventListener("click", mobileMenu);
