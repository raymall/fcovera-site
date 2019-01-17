import Swup from 'swup';
// import printMe from './me.js';
  
const swup = new Swup({
  debugMode: true
});

swup.on('pageView', function () {
  document.querySelector('body').classList.remove('preload');
});

window.addEventListener('load', function() {
  document.querySelector('body').classList.remove('preload');
}, false);

// (function() {
//   printMe();
//   console.log('index.js')
// })();