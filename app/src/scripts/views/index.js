import Swup from 'swup';
// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
// import Glide, { Breakpoints, Build, Clones, Gaps, Keyboard, Move, Peek, Run, Swipe, Transition, Translate } from '@glidejs/glide';
import Glide from '@glidejs/glide';
import AOS from 'aos';
import Swiper from 'swiper';
// import Glide, { Breakpoints, Build, Clones, Gaps, Keyboard, Move, Peek, Run, Swipe, Transition, Translate } from '@glidejs/glide/dist/glide.modular.esm';
// import printMe from './me.js';
  
const swup = new Swup({
  debugMode: true
});

var homeInt;

const bodyElem = document.querySelector('body');

// forEach method, could be shipped as part of an Object Literal/Module
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

const loadFn = function() {
  bodyElem.classList.remove('preload');

  // var glide = new Glide('.glide', {
  //   type: 'carousel',
  //   startAt: 0,
  //   focusAt: 0,
  //   gap: 40,
  //   autoplay: false,
  //   hoverpause: true,
  //   peek: { before: 0, after: 140 },
  //   breakpoints: {
  //     640: {
  //       gap: 30,
  //       peek: { before: 0, after: 60 },
  //     }
  //   }
  // });
  
  // glide.on('run.before', function(e) {
  //   // console.log('run.before');
  //   console.log(e);
  // });
  // glide.on('run', function() {
  //   console.log('run');
  // });
  // glide.on('run.after', function(e) {
  //   // console.log('run.after');
  //   console.log(e);
  // });
  // glide.on('move', function(e) {
  //   // console.log('move');
  //   // console.log(e);
  // });
  // glide.on('move.after', function(e) {
  //   // console.log('move.after');
  //   // console.log(e);
  // });

  if (bodyElem.classList.contains('--work') || bodyElem.classList.contains('--writings')) {
    // console.log('mounted');
    // glide.mount();
    var innerElem = document.querySelector('.-inner').getBoundingClientRect().left;
    var rightElem = document.querySelector('.-slider-hidden').getBoundingClientRect().width;
    document.querySelector('.-slider').style.width = 'calc(100% + ' + (innerElem + 15) + 'px)';
    
    const slides = document.querySelectorAll('.swiper-slide');
    forEach(slides, function (index, value) {
      console.log(index, value); // passes index + value back!
      slides[index].style.width = rightElem + 'px';
    });

    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 40,
      mousewheel: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    });
    console.log(document.querySelector('.-right').getBoundingClientRect())
    // var rightElem = document.querySelector('.-right').offsetLeft - document.querySelector('.-right').width;
  }

  if (bodyElem.classList.contains('--me') || bodyElem.classList.contains('--writings')) {
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
    homeInt = setInterval(function() {
      if (currentIndex == 0) {
        currentIndex = 1;
        document.querySelector('.--discovering').classList.add('fadeIn');
        document.querySelector('.--defining').classList.remove('fadeIn');
        document.querySelector('.--developing').classList.remove('fadeIn');
      } else if (currentIndex == 1) {
        currentIndex = 2;
        document.querySelector('.--discovering').classList.remove('fadeIn');
        document.querySelector('.--defining').classList.add('fadeIn');
        document.querySelector('.--developing').classList.remove('fadeIn');
      } else if (currentIndex == 2) {
        currentIndex = 0;
        document.querySelector('.--discovering').classList.remove('fadeIn');
        document.querySelector('.--defining').classList.remove('fadeIn');
        document.querySelector('.--developing').classList.add('fadeIn');
      }
    }, 6000);
  } else {
    clearInterval(homeInt);
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
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// (function() {
//   printMe();
//   console.log('index.js')
// })();