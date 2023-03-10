import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import axios from 'axios';
// rest of your code that uses axios
import moment from 'moment';
// rest of your code that uses moment



export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9000
  },
  optimizeDeps: {
    include: ['axios', 'moment']
  }
});

