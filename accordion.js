let accordion = document.querySelectorAll('.accordion-header')
let suka = document.querySelectorAll('.accordion-item')
const ACTIVE_CLASSNAME = 'active';

const activeTab = (elems) => 
    Array.from(elems)
        .find(el => el.classList.contains(ACTIVE_CLASSNAME));

for (let i of accordion) {
    i.onclick = function() {
        const result1 = sum(4, 5);
        const result2 = sum(44, 435);
                activeTab(suka).classList.remove(ACTIVE_CLASSNAME);
                i.parentNode.classList.add(ACTIVE_CLASSNAME)
        
    }
}

/**
 * Функция вычисляющая сумму
 * @param {number} a - первое слагаемое
 * @param {number} b - второе слагаемое
 */
function sum (a, b){
    return a + b;
}





let hamburg = document.querySelector('.menu-icon-wrapper')
const mobileNavContainer = document.querySelector('#mobile-nav')
let hamburg2 = document.querySelector('.menu-icon')
hamburg.onclick = function() {
    hamburg2.classList.toggle('menu-icon-active')
    mobileNavContainer.classList.toggle('mobile-nav--active')
}


let menuIcon = document.querySelector('.menu-icon')
let mobileNav = document.querySelectorAll('.mobile-navigation-item')
for (nav of mobileNav) {
    nav.onclick = function() {
        mobileNavContainer.classList.remove('mobile-nav--active')
        menuIcon.classList.remove('menu-icon-active')
    }
}



let navWrapper = document.querySelector ('.nav-wrapper');
window.onscroll = function () {
    if (window.pageYOffset > 900) {
      navWrapper.classList.add('fixed');
    } else  {
        navWrapper.classList.remove('fixed');
    }
  };