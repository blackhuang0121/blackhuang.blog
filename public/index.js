(function () {
  'use strict';

  // src/script.js

  window.addEventListener('scroll', () => {
    let lastScrollTop = 0;
    const navMenu = document.getElementById('nav-menu');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navMenu.style.display = 'none';
    } else {
      navMenu.style.display = 'flex';
    }

    lastScrollTop = scrollTop;
  });

})();
