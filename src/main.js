const { createApp } = require('vue');
import router from './router';
import App from './App.vue';

createApp(App).use(router).mount('#app');
