const animalsInfo = [
    {
        img: '../../assets/images/pandas_push_me_bro.jpeg',
        alt: 'Two Pandas',
        btn: 'Giant pandas',
        small: 'Native to Southwest China',
        icon: 'icon-fruits'
    }
]
function toggleTopMenu(event) {

    document.getElementsByClassName('nav-overlay')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-container')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-top')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-top')[0].querySelector('ul').classList.toggle('open-top-menu');
    document.getElementById('cover').classList.toggle('covering');
}

const slideAnimals = (event) => {
    console.log('Slide animals', event.srcElement.id);
    document.getElementsByClassName('animals-card')[0].scrollBy(200,0);
}

document.getElementsByClassName('toggle-nav-top')[0].addEventListener("click", toggleTopMenu);
document.getElementById('cover').addEventListener("click", toggleTopMenu);
document.getElementById('button-arrow-left').addEventListener("click", slideAnimals);
document.getElementById('button-arrow-right').addEventListener("click", slideAnimals);