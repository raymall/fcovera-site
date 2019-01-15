import Swup from 'swup';
// import printMe from './me.js';

const swup = new Swup();

window.addEventListener('load', function() {
  document.querySelector('body').classList.remove('preload');
}, false);

swup.on('pageView', function () {
  document.querySelector('body').classList.remove('preload');
});

// (function() {
//   printMe();
//   console.log('index.js')
// })();