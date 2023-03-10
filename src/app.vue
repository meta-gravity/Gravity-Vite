<!-- <template>
    <div :class="themeClass">
      <button @click="toggleTheme">Toggle {{ currentTheme }} mode</button>
      <div class="p-4 bg-gray-100 dark:bg-gray-900">
        <h1 class="text-3xl font-bold mb-2">Welcome to Gravity-Vite</h1>
        <p class="text-gray-700 mb-4">By Metagravity</p>
        <div class="p-4 bg-gray-100 dark:bg-gray-800">
          <h2 class="text-2xl font-bold mb-2">Hello, world!</h2>
          <p class="text-gray-700">This is a starter template for building Vue.js applications with Tailwind CSS and Prettier.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        currentTheme: 'light',
        isDark: false,
      };
    },
    computed: {
      themeClass() {
        return this.isDark ? 'dark' : 'light';
      },
    },
    methods: {
      toggleTheme() {
        this.isDark = !this.isDark;
        this.currentTheme = this.isDark ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
      },
    },
    mounted() {
      const theme = localStorage.getItem('theme');
      if (theme) {
        this.currentTheme = theme;
        this.isDark = theme === 'dark';
      }
    },
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  .dark .bg-gray-100 {
    background-color: #1f2937;
  }
  .dark .bg-gray-800 {
    background-color: #4b5563;
  }
  </style>
   -->

   <template>
    <div class="bg-gray-100 min-h-screen flex items-center justify-center">
      <h1 class="text-4xl font-bold">Hello, Gravity-Vite-Vue!</h1>
    </div>
  </template>
  
