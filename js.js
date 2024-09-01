window.onload = init;

function init() {
    fadeOutBlackout();
    startBounceAnimation();
}

function fadeOutBlackout() {
    var opacity = 1; 
    function fade() {
        if (opacity > 0) {
            opacity -= 0.005;
            document.getElementById('blackout').style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            requestAnimationFrame(fade); 
        } else {
            document.getElementById('blackout').style.display = 'none';
        }
    }
    fade();
}

function startBounceAnimation() {
    const walle = document.getElementById('walle');
    walle.style.animation = 'none';
    void walle.offsetWidth;
    walle.style.animation = 'bounce 1s ease infinite';
}
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    const video=document.getElementsByTagName('video')[0];
    const main=document.getElementsByTagName('main')[0];
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    main.style.cssText = `width:${video.offsetWidth}px; 
    margin-right:${window.innerWidth - video.offsetWidth}px;`;

});

