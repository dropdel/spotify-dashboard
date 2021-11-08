const menu = document.querySelector('.menu-button');
const sidebar = document.querySelector('#sidebar');
let menuOpen = false;
menu.addEventListener('click', () => {
    if(!menuOpen) {
        menu.classList.add('open');
        menuOpen = true;
        sidebar.style = 'display: block;';
    }
    else {
        menu.classList.remove('open');
        sidebar.style = 'display: none;'
        menuOpen = false;
    }
})
