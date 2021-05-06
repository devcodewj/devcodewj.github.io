const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.right = '0';
    mainMenu.style.transition ='right 1s ease' ;

}

function hide() {
    mainMenu.style.left = '-100%';
}
var d= new Date()
document.getElementById("year").innerHTML = d.getFullYear();
