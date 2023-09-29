(() => {
    console.log ('Express and Immerse')

    let hamMenu = document.querySelector('#hamburger-menu');
    let navMenu = document.querySelector('#main-nav')

    function openMobileMenu() {
        hamMenu.classList.toggle('rotate');
        navMenu.classList.toggle('show');
    }

    hamMenu.addEventListener('click', openMobileMenu)
})();