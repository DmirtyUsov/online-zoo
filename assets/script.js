const animalsInfo = [
    {
        img: '../../assets/images/pandas_push_me_bro.jpeg',
        alt: 'Two Pandas',
        btn: 'Giant pandas',
        small: 'Native to Southwest China',
        icon: 'icon-fruits'
    }
]

let valueTestimonialScroll = 0;

function toggleTopMenu(event) {

    document.getElementsByClassName('nav-overlay')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-container')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-top')[0].classList.toggle('open-top-menu');
    document.getElementsByClassName('nav-top')[0].querySelector('ul').classList.toggle('open-top-menu');
    document.getElementById('cover').classList.toggle('covering');
}

const slideAnimals = (event) => {
    console.log('Slide animals', event.srcElement.id);
    switch (event.srcElement.id) {
        case '': 

    }
    document.getElementsByClassName('animals-card')[0].scrollBy(300,0);
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
window.matchMedia('(max-width: 1280px)').addEventListener('change', setWhen1280px);
document.getElementsByClassName('toggle-nav-top')[0].addEventListener("click", toggleTopMenu);
document.getElementById('cover').addEventListener("click", toggleTopMenu);
document.getElementById('button-arrow-left').addEventListener("click", slideAnimals);
document.getElementById('button-arrow-right').addEventListener("click", slideAnimals);

document.getElementById('testimonilal-scroll').addEventListener("input", slideTestimonials);