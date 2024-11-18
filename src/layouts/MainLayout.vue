<script setup>
import HeaderBar from "../components/HeaderBar.vue";
import RouterSidebar from "../components/RouterSidebar.vue";
import { ref } from "vue";

const routerIsOpen = ref(false);
function toggleRouterSidebar() {
  routerIsOpen.value = !routerIsOpen.value;
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <HeaderBar @toggle-sidebar="toggleRouterSidebar" />
    </q-header>
    <RouterSidebar :isOpen="routerIsOpen" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    RouterSidebar,
  },
  data() {
    return {
      routerIsOpen: false,
    };
  },
  methods: {
    toggleRouterSidebar: function () {
      this.routerIsOpen = !this.routerIsOpen;
    },
  },
});
</script>
