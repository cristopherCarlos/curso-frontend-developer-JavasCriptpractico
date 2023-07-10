const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu); //show->solo se muestra una vez; toggle->varias veces

function toggleDesktopMenu() {
    DesktopMenu.classList.toggle('inactive');
}