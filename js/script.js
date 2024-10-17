/* ==== Turns the Menu hamburguer into a x === */
const menuHamburguer = document.querySelector('.menu-hamburguer') ;
menuHamburguer.addEventListener('click', () => {
    toggleMenu() ;
}) ;

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive') ;
   menuHamburguer.classList.toggle('chang') ;

   if (menuHamburguer.classList.contains('chang')) {
      nav.style.display = 'block' ;

   }else {
    nav.style.display = 'none' ;

   }
}