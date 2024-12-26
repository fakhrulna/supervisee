<!-- src/components/Header.vue -->
<template>
    <header class="bg-sky-900 text-white py-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div class="text-2xl font-semibold">
          <a href="#">MyApp</a>
        </div>
        <nav>
          <ul class="flex space-x-6">
            <li><a href="#" class="hover:text-gray-300">Home</a></li>
            <li><a href="#" class="hover:text-gray-300">About</a></li>
            <li><a href="#" class="hover:text-gray-300">Services</a></li>
            <li><a href="#" class="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  /* Additional styles specific to Header can go here */
  </style>
  