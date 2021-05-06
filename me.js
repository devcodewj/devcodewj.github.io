const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    mainMenu.style.transition ='top 1s ease' ;

}

function hide() {
    mainMenu.style.top = '-300vh';
}
var d= new Date()
document.getElementById("year").innerHTML = d.getFullYear();
