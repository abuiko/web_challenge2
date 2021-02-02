// const dots = document.querySelectorAll('.dot');

// dots.forEach(dot => {
//     dot.addEventListener('click', () => {
//         dot.classList.add('active');
//     });
// })


const burger = document.querySelector('.header__toggle');
const nav = document.querySelector('.burger__menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        overlay.style.opacity = 1;
        burger.classList.add('open');
        body.classList.add('no-scroll');

    } else {
        overlay.style.opacity = 0;
        body.classList.remove('no-scroll')
        burger.classList.remove('open');
    }
})