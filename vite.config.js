const path = require('path');

// Import the defineConfig function from Vite
import { defineConfig } from 'vite';

// Import the Vue plugin for Vite
import vue from '@vitejs/plugin-vue';

// Import axios and moment libraries

// Import createApp function from Vue

// Import format function from Prettier



// Define the Vite configuration object
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Set the entry point for the library
      entry: path.resolve(__dirname, "src/index.js"),

      // Set the library name
      name: "gravity-vite",

      // Set the output file name
      fileName: (format) => `gravity-vite.${format}.js`,
    },

    // Set the external dependencies for the library
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },

  // Add the Vue plugin to Vite
  plugins: [vue()],

  // Configure the development server
  server: {
    port: 3000
  },

  // Optimize dependencies for faster build times
  optimizeDeps: {
    include: ['axios', 'moment']
  }
});

