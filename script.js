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
