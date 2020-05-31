import Swup from 'swup';
import AOS from 'aos';
import Swiper from 'swiper';
// import printMe from './me.js';
  
const swup = new Swup({
  debugMode: false
});

let homepageGalleryInt;

const bodyElem = document.querySelector('body');

var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

const loadFn = function() {
  bodyElem.classList.remove('preload');

  if (bodyElem.classList.contains('--work') || bodyElem.classList.contains('--writings')) {

    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 40,
      mousewheel: true,
      simulateTouch: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
      breakpoints: {
        640: {
          spaceBetween: 30,
        },
      }
    });

    var currentSlide = mySwiper.activeIndex;
    var slideText = document.querySelectorAll('.-post');

    mySwiper.on('touchStart', function () {
      currentSlide = mySwiper.activeIndex;
      console.log('touchStart', currentSlide);
      slideText[currentSlide].classList.remove('--active');
    });
    mySwiper.on('slideChangeTransitionStart', function () {
      console.log('slideChangeTransitionStart', currentSlide);
      slideText[currentSlide].classList.remove('--active');
    });
    mySwiper.on('transitionEnd', function () {
      currentSlide = mySwiper.activeIndex;
      console.log('transitionEnd', currentSlide);
      slideText[currentSlide].classList.add('--active');
    });

    var dataPost = document.querySelectorAll('[data-post]');
    var dataSlider = document.querySelectorAll('.swiper-slide');
    forEach(dataPost, function (index, value) {
      dataPost[index].addEventListener('click', function(e) {
        
        forEach(dataSlider, function (index, value) {
          dataSlider[index].classList.add('fade-out');
        });
        dataSlider[this.getAttribute('data-post')].classList.add('scale');
        document.querySelector('.swiper-container').classList.add('scale');
        e.preventDefault();
        return false;
      });
    });
  }

  if (bodyElem.classList.contains('--me')) {
    var s = document.getElementById("floater");
    function parallax() {
      var yPos = 0 - window.pageYOffset/40;	
      s.style.transform = 'translateY(' + yPos + "%)";
    }
    
    window.addEventListener("scroll", function(){
      parallax();	
    });
  }

  if (bodyElem.classList.contains('--index')) {
    var currentIndex = 0;
    var discoveringGallery = document.querySelector('.--desktop .--discovering');
    var definingGallery = document.querySelector('.--desktop .--defining');
    var developingGallery = document.querySelector('.--desktop .--developing');
    homepageGalleryInt = setInterval(function() {
      if (currentIndex == 0) {
        currentIndex = 1;
        discoveringGallery.classList.remove('--fade-in');
        definingGallery.classList.add('--fade-in');
        developingGallery.classList.remove('--fade-in');
      } else if (currentIndex == 1) {
        currentIndex = 2;
        discoveringGallery.classList.remove('--fade-in');
        definingGallery.classList.remove('--fade-in');
        developingGallery.classList.add('--fade-in');
      } else if (currentIndex == 2) {
        currentIndex = 0;
        discoveringGallery.classList.add('--fade-in');
        definingGallery.classList.remove('--fade-in');
        developingGallery.classList.remove('--fade-in');
      }
    }, 6000);
  } else {
    clearInterval(homepageGalleryInt);
  }
}


swup.on('pageView', loadFn);

window.addEventListener('load', loadFn, false);
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// (function() {
//   printMe();
//   console.log('index.js')
// })();