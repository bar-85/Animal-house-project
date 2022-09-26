import { createApp } from 'vue';

import App from './App.vue';
import HousesList from './components/HousesList.vue';
import NewHouse from './components/NewHouse.vue';

const app = createApp(App);

app.component('houses-list', HousesList);
app.component('new-house', NewHouse);

app.mount('#app');
