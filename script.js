// script.js

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        const element1 = document.getElementById('animate1');
        element1.classList.add('animate__animated', 'animate__fadeOutRightBig');
    }, 2200); // 2 secondes de délai

    setTimeout(function () {
        const element2 = document.getElementById('animate2');
        element2.classList.remove('hidden'); // Supprime la classe 'hidden'
        element2.classList.add('animate__animated', 'animate__fadeInLeftBig');
    }, 1500); // 3 secondes de délai
});




document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.getElementById('typewriter');
    const options = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.8 // trigger when at least 80% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                typewriter.style.animation = "none";
                setTimeout(()=>{
                    typewriter.style.animation = 'typing 3.5s steps(40, end), blink-caret .5s step-end infinite, hide-cursor 3.5s 3.5s forwards';
                 }, 30);
             }

        });
    }, options);

    observer.observe(typewriter);
});
