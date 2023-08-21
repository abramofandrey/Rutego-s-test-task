import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: '.bestsellers__btn-next',
    prevEl: '.bestsellers__btn-prev',
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

const catalogButton = document.querySelector('.button--catalog');
const catalogModal = document.querySelector('.catalog-modal');
const dropdownBtnClose =document.querySelector('.dropdown__btn-close');

catalogButton.addEventListener('click', () => {
  catalogModal.classList.remove('visibility-hidden');
  catalogModal.classList.add('catalog-modal');
});

dropdownBtnClose.addEventListener('click', () => {
  catalogModal.classList.add('visibility-hidden');
});