const menu = document.querySelector('.menu-button');
const sidebar = document.querySelector('#sidebar');
const sidebarStyling = 'display:block;position:fixed;width:100%;height:100%;';
let menuOpen = false;
menu.addEventListener('click', () => {
    if(!menuOpen) {
        menu.classList.add('open');
        menuOpen = true;
        sidebar.style = sidebarStyling;
    }
    else {
        menu.classList.remove('open');
        sidebar.style = 'display: none;'
        menuOpen = false;
    }
})
