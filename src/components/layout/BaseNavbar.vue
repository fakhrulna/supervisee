<template>
  <div class="grid grid-cols-9">
    <!-- icon navbar -->
    <div class="menuSection col-span-2">
      <div class="h-16"></div>
      <HomeIcon class="mainIcon" />
      <BriefcaseIcon class="mainIcon" />
    </div>
    <!-- details menu -->
    <div class="subMenuSection col-span-7">
      <div class="subMenuTitle">Home</div>
      <div class="p-2">
        <div class="subMenu" v-for="item in menuItems" :key="item.text">
          <component :is="item.icon" class="subMenuIcon" />
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BriefcaseIcon, HomeIcon, BellIcon, RectangleStackIcon, CalendarIcon } from '@heroicons/vue/24/outline';

export default {
  components: {
    BriefcaseIcon,
    HomeIcon,
    BellIcon,
    RectangleStackIcon,
    CalendarIcon,
  },
  name: 'Home',
  data() {
    return {
      menuItems: [
        {
          title: 'Home', items: [
            { icon: 'RectangleStackIcon', text: 'My Work' },
            { icon: 'BellIcon', text: 'Notifications' },
            { icon: 'CalendarIcon', text: 'My Task' }
          ]
        },
        {
          title: 'Work', items: [
            { icon: 'RectangleStackIcon', text: 'My Work' },
            { icon: 'BellIcon', text: 'Notifications' },
            { icon: 'CalendarIcon', text: 'My Task' }
          ]
        },
      ]
    };
  }
};
</script>