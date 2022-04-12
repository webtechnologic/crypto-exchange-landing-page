const burger = document.querySelector('.menu-burger');
const navMenu = document.querySelector('.menu-list-nav');
const html = document.querySelector('html');


function toggleMenu() {
    burger.classList.toggle('open');
    navMenu.classList.toggle('close');
    html.classList.toggle('scroll-close');
}


burger.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenu);
/*html.addEventListener('click', toggleMenu);*/
