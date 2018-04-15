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

    // Let's menu buttons scroll down to div they are referencing
    [...menuButtons].forEach(button => {
        button.addEventListener('click', function (event) {
            // console.log('hey');
            event.preventDefault();

            // Remove # from beginning of string
            const targetDiv = event.target.getAttribute("href").substring(1);
            if (targetDiv !== null) {
                document.getElementById(targetDiv).scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                  },);

                //   let currentY = window.scrollY;
                //   let desktopMenuHeight = 10;
                  
                //   // To offset fixed desktop menu
                //   window.scroll(0, currentY - desktopMenuHeight);
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
