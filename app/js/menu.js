'use strict';
// Activates the mobile menu button
(() => {
    const mobileMenuBurger = document.querySelector('#mobile-menu-burger');
    const menu = document.querySelector('#menu');
    const menuButtons = document.querySelectorAll('.menu-button');

    const toggleMobileMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        mobileMenuBurger.classList.toggle('x-burger');
        menu.classList.toggle('pull-out-mobile-menu');
    };

    let isMobileMenuOpen = false;

    mobileMenuBurger.addEventListener('click', () => {
        toggleMobileMenu();
    });

    [...menuButtons].forEach(button => {
        button.addEventListener('click', function (event) {
            // Remove # from beginning of string
            const targetDiv = event.target.getAttribute("href").substring(1);
            if (targetDiv !== null) {
                document.getElementById(targetDiv).scrollIntoView();
            }
        });
    });

    // A click not on menu burger
    document.querySelectorAll('body')[0].addEventListener('click', function (event) {
        if (isMobileMenuOpen && !event.target.classList.contains('mobileMenuBurgerButton')) {
            toggleMobileMenu();
        }
    });

})();
