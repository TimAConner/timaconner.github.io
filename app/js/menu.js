'use strict';
// Activates the mobile menu button
(() => {
    const mobileMenuBurger = document.getElementById('mobile-menu-burger');
    const menu = document.getElementById('menu');
    mobileMenuBurger.addEventListener('click', () => {
        mobileMenuBurger.classList.toggle('change');
        menu.classList.toggle('pull-out-mobile-menu');
    });
})();