//Essa é a parte que eu mais queria aprender sobre esse tutorial.
//addEventListener = Espera um evento acontecer para entrar em ação.
//scrollY = Movimenta na posição Y = vertical.
//CARAMBA ISSO É MUITO MANEIRO!!!
//CARAMBA ISSO É REALMENTE MUITO LEGAL! 
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainsBehind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn')
let mountainsFront = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountainsBehind.style.top = value * 0.5 + 'px';
    mountainsFront.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top
})