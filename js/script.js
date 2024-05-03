function dropdown() {
const accordionItems = document.querySelectorAll('.hero-banner__image-card-wrap');
const accordionButtons = document.querySelectorAll('.hero-banner__card-size');
accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isOpen = item.classList.contains('active');
        accordionItems.forEach(item => item.classList.remove('active'));
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});
const faqAccordion = document.querySelectorAll('.main__faq-accordian');
const faq_accordionButtons = document.querySelectorAll('.main__faq-accordian-item');
console.log(faq_accordionButtons)
faqAccordion.forEach(button => {
    button.addEventListener('click',function () {
        this.classList.toggle("active")
    });
});
let menuIcon = document.getElementById('menuicon');
let crossIcon = document.getElementById('crossicon');
let dropdown = document.getElementById('dropdown');
menuIcon.addEventListener('click', myFunction)
function myFunction() {
dropdown.style = ("left:0");
menuIcon.style.display='none'
crossIcon.style.display="block"
}
crossIcon.addEventListener('click', yourFunction)
function yourFunction() {
    dropdown.style = ('left:-100%');
    crossIcon.style.display="none"
    menuIcon.style.display='block'
}
const accordionItems2 = document.querySelectorAll('.header__accordian');
const accordionButtons2 = document.querySelectorAll('.header__accordian__item');
console.log(accordionButtons2)
accordionButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        console.log(item)
        const isOpen = item.classList.contains('active');
        accordionItems2.forEach(item => item.classList.remove('active'));
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});
}
dropdown();
swiper = new Swiper(".mySwiper", {
  loop:true,
  freeMode:true,
  spaceBetween:20,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 200,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
 autoplay: {
 delay: 1000,
 speed :5000,
 },
 breakpoints: {
  360: {
    slidesPerView: 2,
  },
  767: {
    slidesPerView: 3,
  },
  991: {
    slidesPerView: 4,
  },
  1280: {
    slidesPerView: 4.5,
  },
},
});
var swiper1 = new Swiper(".Swiper", {
  slidesPerView:6,
  freeMode: true,
  loop: true,
    disableOnInteraction:false,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".Swiper2", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper1,
  },
});


