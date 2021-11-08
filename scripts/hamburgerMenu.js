const menu = document.querySelector('.menu-button');
let menuOpen = false;
menu.addEventListener('click', () => {
    if(!menuOpen) {
        menu.classList.add('open');
        menuOpen = true;
        console.log('works');
    }
    else {
        menu.classList.remove('open');
        menuOpen = false;
    }
})
console.log('works');