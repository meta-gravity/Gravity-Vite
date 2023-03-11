// Import the createApp function from Vue
import { createApp } from 'vue';

import GravityVite from "./components/GravityVite.vue"

// Export a Vue plugin object with an install method
export default {
  install: (app, options) => {
    // Register the GravityVite component as a global component
    app.component("GravityVite", GravityVite);
  },
};


