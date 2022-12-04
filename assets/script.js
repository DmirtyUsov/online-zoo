function toggleTopMenu(event) {
    console.log('menu');
    document.getElementsByClassName('nav-top')[0].classList.toggle('open');
}

document.getElementsByClassName('toggle-nav-top')[0].addEventListener("click", toggleTopMenu);