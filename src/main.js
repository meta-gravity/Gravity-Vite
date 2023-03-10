import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

// createApp(App).mount('#app');
const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
