<template>
  <div class="grid grid-cols-9">
    <!-- icon navbar -->
    <div class="menuSection col-span-2">
      <div class="h-16"></div>
      <HomeIcon class="mainIcon" @click="selectMenu('Home')" :class="{ 'active': menuSelect === 'Home' }" />
      <BriefcaseIcon class="mainIcon" @click="selectMenu('Work')" :class="{ 'active': menuSelect === 'Work' }" />
    </div>
    <!-- details menu -->
    <div class="subMenuSection col-span-7">
      <div class="subMenuTitle">Home</div>
      <div class="p-2">
        <div v-for="item in menuItems" :key="item.title">
          <div
            class="subMenu"
            v-if="item.title == menuSelect" v-for="itemSub in item.items"
            :key="itemSub.text"
            :class="{ 'active': submenuSelect === itemSub.text }"
            @click="selectSubMenu(itemSub.text)">
            <component :is="itemSub.icon" class="subMenuIcon" />
            {{ itemSub.text }}
          </div>
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
      menuSelect: 'Home',
      submenuSelect: '',
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
            { icon: 'RectangleStackIcon', text: 'Project 1' },
            { icon: 'BellIcon', text: 'Notifications' },
            { icon: 'CalendarIcon', text: 'My Task' }
          ]
        },
      ]
    };
  },
  methods: {
    selectMenu(menu) {
      console.log(menu);
      this.menuSelect = menu;
    },
    selectSubMenu(subMenu) {
      console.log(subMenu);
      this.submenuSelect = subMenu;
    }
  }
  
};
</script>

<style scoped>
/* Default Submenu Styling */
.subMenu {
  cursor: pointer;
  padding: 8px;
  transition: background-color 0.3s ease;
}
</style>