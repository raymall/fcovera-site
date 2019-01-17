import Swup from 'swup';
import Glide from '@glidejs/glide';
// import printMe from './me.js';
  
const swup = new Swup({
  debugMode: true
});

const bodyElem = document.querySelector('body');

const loadFn = function() {
  bodyElem.classList.remove('preload');

  if (bodyElem.classList.contains('--work') || bodyElem.classList.contains('--writings'))
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    focusAt: 0,
    gap: 40,
    autoplay: false,
    hoverpause: true,
    peek: { before: 0, after: 140 },
    breakpoints: {
      640: {
        gap: 30,
        peek: { before: 0, after: 60 },
      }
    }
  }).mount();
}

swup.on('pageView', loadFn);
window.addEventListener('load', loadFn, false);

// (function() {
//   printMe();
//   console.log('index.js')
// })();