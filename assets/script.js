const animalsInfo = [
    {
        img: '../../assets/images/pandas_push_me_bro.jpeg',
        alt: 'Two Pandas',
        btn: 'Giant pandas',
        small: 'Native to Southwest China',
        icon: 'icon-fruits'
    },
    {
        img: '../../assets/images/eagle.jpg',
        alt: 'Eagle',
        btn: 'Eagles',
        small: 'Native to South America',
        icon: 'icon-meat'
    },
    {
        img: '../../assets/images/gorilla.jpg',
        alt: 'Gorilla',
        btn: 'Gorillas',
        small: 'Native to Congo',
        icon: 'icon-fruits'
    },
    {
        img: '../../assets/images/sloth.jpg',
        alt: 'Sloth',
        btn: 'Tow-toed Sloth',
        small: 'Mesoamerica, South America',
        icon: 'icon-fruits'
    },
    {
        img: '../../assets/images/cheetahs.jpg',
        alt: 'Cheetahs',
        btn: 'Cheetahs',
        small: 'Native to Africa',
        icon: 'icon-meat'
    },
    {
        img: '../../assets/images/pinguins.jpg',
        alt: 'Pinguins',
        btn: 'Pinguins',
        small: 'Native to Antarctica',
        icon: 'icon-meat'
    },
]

let is640pxORless = ((window.innerWidth < 641) ? true : false);

let valueTestimonialScroll = 0;

function toggleTopMenu(event) {

    document.getElementsByClassName('nav-overlay')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-container')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-top')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-top')[0].querySelector('ul').classList.toggle('open-top-menu');
    document.getElementById('cover').classList.toggle('covering');
}

const createFotoCard = (idx) => {
    return `
        <div class="foto-card-wrapper">
            <div class="foto-card">
                <img src="${animalsInfo[idx].img}" alt="${animalsInfo[idx].alt}">
                <div class="foto-card-description">
                    <div>
                        <div class="btn">${animalsInfo[idx].btn}</div>
                        <div class="small-paragraph">${animalsInfo[idx].small}</div>
                    </div>
                    <div class="foto-card-icons ${animalsInfo[idx].icon}"></div>
                </div>
            </div>
        </div>
    `
}

const createAnimalsCards = () => {
    const totalFotoCards = 6;
    let idxAnimalsInfo = Array.from(Array(animalsInfo.length).keys());
    idxAnimalsInfo.sort(() => Math.random() - 0.5) // shuffle
    let divAnimalsCards = document.createElement('div');
    divAnimalsCards.classList.add('animals-cards');
    for(let idx=0; idx < totalFotoCards; idx++) {
        divAnimalsCards.insertAdjacentHTML('beforeend', createFotoCard(idxAnimalsInfo[idx]));
    }
    return divAnimalsCards;
}

const slideAnimals = (event) => {
    console.log('Slide animals', event.srcElement.id);
    let carousel = document.querySelector('.animals-carousel');
    switch (event.srcElement.id) {
        case 'button-arrow-right':
            carousel.append(createAnimalsCards());
            carousel.firstElementChild.remove();
            console.log('right')
            break;
        case 'button-arrow-left':
            carousel.prepend(createAnimalsCards());
            carousel.lastElementChild.remove();
            console.log('left')
            break;
    }
    document.getElementsByClassName('animals-cards')[0].scrollBy(500,0);
}

const slideTestimonials = (event) => {

    let gridGap = window.getComputedStyle(
                            document.getElementsByClassName('testimonials-content')[0],
                            null
                ).getPropertyValue('gap');
    console.log('Slide testimonials',event.target.value, parseInt(gridGap));
    let cardWidth = document
                        .getElementsByClassName('testimonial-card ')[0]
                        .offsetWidth;
    let change = event.target.value - valueTestimonialScroll;
    valueTestimonialScroll = event.target.value;
    document
        .getElementsByClassName('testimonials-carousel')[0]
        .scrollBy((cardWidth + parseInt(gridGap)) * change,0)

}

const setWhen1280px = (param) => {

    if (param.matches) { // less or equal 1000px
        document
            .getElementById('testimonilal-scroll')
            .setAttribute('max', 8);
    }
    else {
        document
            .getElementById('testimonilal-scroll')
            .setAttribute('max', 7);
    }
}

const setWhen640px = (param) => {
    if (param.matches) { // less or equal 640px
        is640pxORless = true;
    }
    else {
        is640pxORless = false;
    }
    document.getElementById('popup').classList.remove('open-popup');
}

const togglePopup = (event) => {
    console.log(event.currentTarget, event.target.style.cursor);
    event.stopPropagation();
    document.getElementsByClassName('testimonial-popup-content')[0]
        .querySelector('div')
        .innerHTML = event.currentTarget.innerHTML;
    if (is640pxORless) {
        document.getElementById('popup').classList.toggle('open-popup');
    }
}

window.matchMedia('(max-width: 1280px)').addEventListener('change', setWhen1280px);
window.matchMedia('(max-width: 640px)').addEventListener('change', setWhen640px);
document.getElementsByClassName('toggle-nav-top')[0].addEventListener("click", toggleTopMenu);
document.getElementById('cover').addEventListener("click", toggleTopMenu);
// only for main
try {
    document.getElementById('button-arrow-left').addEventListener("click", slideAnimals);
    document.getElementById('button-arrow-right').addEventListener("click", slideAnimals);
    document.getElementById('testimonilal-scroll').addEventListener("input", slideTestimonials);
    document
        .querySelectorAll('.testimonial-card')
        .forEach(card => {card.addEventListener('click', togglePopup)});
    document.getElementsByClassName('close-popup')[0].addEventListener('click', togglePopup);
    document.getElementsByClassName('testimonial-popup')[0].addEventListener('click', togglePopup);
}
catch(e) {
    console.log(e);
}
// only Donate
document.getElementsByClassName('radio-amount-bg')[0]
    .querySelectorAll('input')
    .forEach(radio => radio.addEventListener('change',
                                            (event) => {document
                                                    .getElementById('donate-input')
                                                    .value = event.currentTarget.value}));
const updateRadio = (event) => {
    const elemInput = event.currentTarget;
    const newValue = elemInput.value.slice(0, elemInput.dataset.maxlength);
    document
        .getElementsByClassName('radio-amount-bg')[0]
        .querySelectorAll('input')
        .forEach(radio => radio.checked = (radio.value === newValue));
}

document.getElementById('donate-input').addEventListener('input', updateRadio);