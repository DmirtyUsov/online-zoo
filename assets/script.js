
function toggleTopMenu(event) {
    console.log('menu');

    document.getElementsByClassName('nav-overlay')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-container')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-top')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-top')[0].querySelector('ul').classList.toggle('open-top-menu');
    document.getElementById('cover').classList.toggle('covering');
}

document.getElementsByClassName('toggle-nav-top')[0].addEventListener("click", toggleTopMenu);
document.getElementById('cover').addEventListener("click", toggleTopMenu);