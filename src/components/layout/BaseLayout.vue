<template>
    <div class="flex flex-col min-h-screen" :class="[background_color]">
      <div class="flex-1 grid grid-cols-12">
		    <BaseNavbar class="col-span-2" v-if="show_navbar" :background_color="'bg-green-400'" />
        <div class="col-span-10 bg-gray-200">
          <BaseHeader v-if="show_header" />
          <div class="min-h-max">
            <slot />
          </div>
        </div>
      </div>
      <!-- <BaseFooter v-if="show_footer" class="flex-none border-t" /> -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show_header: {
        type: Boolean,
        default: true,
      },
      show_navbar: {
        type: Boolean,
        default: true,
      },
      show_footer: {
        type: Boolean,
        default: true,
      },
      background_color: {
        type: String,
        default: "bg-backgroud",
      },
    },
  };
  </script>
  