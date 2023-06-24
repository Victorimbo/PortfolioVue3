import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store.js';
import { createVfm } from 'vue-final-modal';
import 'vue-final-modal/style.css';

const app = createApp(App);
const vfm = createVfm();
app.use(vfm);
app.use(store);
app.mount('#app');
