(() => {
    console.log ('Express and Immerse')

    let hamMenu = document.querySelector('#hamburger-menu'),
        navMenu = document.querySelector('#main-nav'),
        xrayCon = document.querySelector('#xray-container'),
        xraySlider = document.querySelector('.slider-bar'),
        left = document.querySelector('.left-image'),
        dragging = false,
        min = 0,
        max = xrayCon.offsetWidth;


    function openMobileMenu() {
        hamMenu.classList.toggle('rotate');
        navMenu.classList.toggle('show');
    }

    function onDown() {
        dragging = true
    }

    function onUp() {
        dragging = false
    }

    function onMove(event) {
        if(dragging === true) {
            let x = event.clientX - xrayCon.getBoundingClientRect().left;

            if(x < min) {
                x = min;
            } else if  (x > max) {
                x = max-5;
            }

            xraySlider.style.left = x + 'px';
            left.style.width = x + 'px';
        }
    }

    hamMenu.addEventListener('click', openMobileMenu);
    xraySlider.addEventListener('mousedown', onDown);
    document.body.addEventListener('mouseup', onUp);
    document.body.addEventListener('mousemove', onMove)

})();