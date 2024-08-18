const btnNav = document.querySelector('.btn-mobile-nav');
let headerEl = document.querySelector('.header');
const liItem = document.querySelector('.nav-item.cta');
const linkItem = document.querySelector('.nav-link.cta')
const lockIcon = document.querySelector('.lock-icon');


function openorCloseMenu() {
    headerEl.classList.toggle('nav-open');
    liItem.classList.remove('cta');
    linkItem.classList.remove('cta');
    lockIcon.style.display = "none"
}