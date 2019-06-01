'use strict';
// Activates the mobile menu button
(() => {

    // To set if touch or click that is being listened to
    const clickEvent = document.ontouchstart !== null ? 'click' : 'touchstart';
    const mobileMenuBurger = document.querySelector('#mobile-menu-burger');
    const menu = document.querySelector('#menu');
    const menuButtons = document.querySelectorAll('.menu-button');

    const toggleProjectOverflowButton = document.querySelector('#toggleProjectOverflow');
    const projectOverflow = document.querySelector('.projectOverflow');

    const toggleJobOverflowButton = document.querySelector('#toggleJobOverflow');
    const jobOverflow = document.querySelector('.jobOverflow');

    const toggleMobileMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        mobileMenuBurger.classList.toggle('x-burger');
        menu.classList.toggle('pull-out-mobile-menu');
    };

    const toggleShowMore = (overflowDiv, overflowButton) => {
        overflowDiv.classList.toggle('hidden');
        if (overflowButton.textContent === 'Show More') {
            overflowButton.textContent = 'Show Less';
            return;
        }
        overflowButton.textContent = 'Show More';
    };

    let isMobileMenuOpen = false;

    mobileMenuBurger.addEventListener(clickEvent, () => {
        toggleMobileMenu();
    });

    toggleProjectOverflowButton.addEventListener(clickEvent, () => {
        toggleShowMore(projectOverflow, toggleProjectOverflowButton);
    });

    toggleJobOverflowButton.addEventListener(clickEvent, () => {
        toggleShowMore(jobOverflow, toggleJobOverflowButton);
    });

    // Let's menu buttons scroll down to div they are referencing
    [...menuButtons].forEach(button => {
        button.addEventListener(clickEvent, function (event) {
            // console.log('hey');
            event.preventDefault();

            // Remove # from beginning of string
            const targetDivName = event.target.getAttribute("href").substring(1);
            if (targetDivName !== null) {
                const element = document.getElementById(targetDivName);
                const offset = 75;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // A click not on menu burger
    document.querySelectorAll('body')[0].addEventListener(clickEvent, function (event) {
        if (isMobileMenuOpen && !event.target.classList.contains('mobileMenuBurgerButton')) {
            toggleMobileMenu();
        }
    });

    // Set copyright date to this year
    document.querySelector('#copyright-date').innerHTML = (new Date()).getFullYear();

})();
