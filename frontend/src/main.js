import './assets/css/animate.css';
import './assets/css/icomoon.css';
import './assets/css/bootstrap.css';
import './assets/css/magnific-popup.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/style.css';

// import './assets/js/modernizr-2.6.2.min.js';
import './assets/js/jquery.min.js';
import './assets/js/jquery.easing.1.3.js';
// import './assets/js/bootstrap.min.js';
// import './assets/js/jquery.waypoints.min.js';
import './assets/js/owl.carousel.min.js';
// import './assets/js/jquery.countTo.js';
// import './assets/js/jquery.stellar.min.js';
// import './assets/js/jquery.magnific-popup.min.js';
// import './assets/js/magnific-popup-options.js';
import './assets/js/simplyCountdown';
// import './assets/js/main.js';
// import $ from 'jquery';
// window.$ = window.jQuery = $;
// import './assets/styles.scss';
// import 'primevue/resources/primevue.min.css';           // PrimeVue core CSS
// import 'primeicons/primeicons.css';  
// app.use(PrimeVue, { ripple: true });

// import './assets/css/bootstrap.css';
import router from './Routes/Router';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App)
  .use(router)  
  .mount('#app');

 