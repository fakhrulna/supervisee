<template>
  <BaseNavbar>
    <main class="py-8 px-4">
      <div class="subMenuTitle">Home</div>
      <div class="p-2" v-for="item in menuItems" :key="item.text">
        <div class="subMenu">
          <component :is="item.icon" class="subMenuIcon" />
          {{ item.text }}
        </div>
      </div>
    </main>
  </BaseNavbar>
</template>

<script>
import BaseNavbar from '@/components/layout/BaseNavbar.vue';
import { BellIcon, RectangleStackIcon, CalendarIcon } from '@heroicons/vue/24/outline';

export default {
  components: {
    BellIcon,
    RectangleStackIcon,
    CalendarIcon,
  },
  name: 'Home',
  data() {
    return {
      menuItems: [
        { icon: 'RectangleStackIcon', text: 'My Work' },
        { icon: 'BellIcon', text: 'Notifications' },
        { icon: 'CalendarIcon', text: 'My Task' }
      ]
    };
  }
};
</script>