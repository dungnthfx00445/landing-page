/**
 * Define Global Variables
 * 
*/
const header = document.querySelector('.page__header');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

// build the nav
function buildNav() {
    sections.forEach(section => {
        const navbarButton = document.createElement('li');
        navbarButton.insertAdjacentHTML('afterbegin', `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`);
        navbarList.appendChild(navbarButton);
        scrollBehavior(section, navbarButton);
    });
    navbarMenu.appendChild(navbarList);
};

buildNav();


// Add class 'active' to section when near top of viewport
function addActiveSection() {
    const navbarActive = document.querySelectorAll('.menu__link');
    sections.forEach((section, index) => {
        const sectionBounding = section.getBoundingClientRect();
        if(sectionBounding.top <= 350 && sectionBounding.bottom >= 350) {
            section.classList.add('section__active');
            navbarActive[index].classList.add('active_button');
        } else {
            section.classList.remove('section__active');
            navbarActive[index].classList.remove('active_button');
        }
    })
};


// Scroll to anchor ID using scrollTO event
function scrollBehavior(section, navbarButton) {
    navbarButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        })
    }) 
};

// Scroll to section on link click
window.addEventListener('scroll',()=>{
    addActiveSection();
});