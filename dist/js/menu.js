'use strict';
// Activates the mobile menu button
(() => {

    // To set if touch or click that is being listened to
    const clickEvent = document.ontouchstart !== null  ? 'click' : 'touchstart';
    const mobileMenuBurger = document.querySelector('#mobile-menu-burger');
    const menu = document.querySelector('#menu');
    const menuButtons = document.querySelectorAll('.menu-button');

    const toggleMobileMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        mobileMenuBurger.classList.toggle('x-burger');
        menu.classList.toggle('pull-out-mobile-menu');
    };

    let isMobileMenuOpen = false;

    mobileMenuBurger.addEventListener(clickEvent, () => {
        toggleMobileMenu();
    });

    // Let's menu buttons scroll down to div they are referencing
    [...menuButtons].forEach(button => {
        button.addEventListener(clickEvent, function (event) {
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
    document.querySelectorAll('body')[0].addEventListener(clickEvent, function (event) {
        if (isMobileMenuOpen && !event.target.classList.contains('mobileMenuBurgerButton')) {
            toggleMobileMenu();
        }
    });

})();
