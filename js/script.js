/* Start Bootstrap - Resume v7.0.0 (https://startbootstrap.com/theme/resume)
/* Copyright 2013-2021 Start Bootstrap
/* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)*/

window.addEventListener('DOMContentLoaded', event => {

	const sidenav = document.body.querySelector('#sidenav');
	if (sidenav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sidenav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});