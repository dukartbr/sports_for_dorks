<script setup>
import HeaderBar from "../components/HeaderBar.vue";
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <HeaderBar :toggleRouterSidebar="toggleRouterSidebar" />
    </q-header>
    <q-drawer
      v-model="routerIsOpen"
      show-if-above
      class="routerDrawer bg-secondary"
    >
      <span> this is the router crap</span>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      routerIsOpen: true,
    };
  },
  methods: {
    toggleRouterSidebar: function () {
      this.routerIsOpen = !this.routerIsOpen;
    },
  },
});
</script>
