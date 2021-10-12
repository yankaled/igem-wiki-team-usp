import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/igem-reset.css';
import '@/css/CSS_USP.css';
import '@/css/style.css';
import '@/css/mystyles.css';
import '@/js/main.js';

createApp(App).use(router).mount('#app')