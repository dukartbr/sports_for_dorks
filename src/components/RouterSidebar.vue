<style scoped>
.title {
  text-decoration: none;
}
</style>

<template>
  <q-drawer v-model="drawerOpen" class="routerDrawer bg-secondary" :width="200">
    <q-list>
      <q-item
        v-for="route in routes"
        :key="route.label"
        class="q-px-md"
        :class="activeRouteLabel === route?.label ? 'bg-primary' : ''"
        @mouseover="activeRouteLabel = route?.label"
        @mouseout="activeRouteLabel = null"
      >
        <q-item-section avatar>
          <q-icon color="white" :name="route.icon" />
        </q-item-section>
        <q-item-section>
          <router-link :to="route.href" class="title">{{
            route.label
          }}</router-link>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "RouterSidebar",
  props: {
    isOpen: Boolean,
  },
  setup(props) {
    const drawerOpen = ref(props.isOpen);
    watch(
      () => props.isOpen,
      (newVal) => {
        drawerOpen.value = newVal;
      }
    );

    return {
      drawerOpen,
    };
  },
  data() {
    return {
      activeRouteLabel: null,
      routes: [
        {
          label: "Home",
          href: "/",
          icon: "home",
        },
        {
          label: "News",
          href: "/news",
          icon: "newspaper",
        },
        {
          label: "Season",
          href: "/season",
          icon: "calendar_month",
        },
        {
          label: "Roster",
          href: "/roster",
          icon: "groups",
        },
        {
          label: "Stats",
          href: "/stats",
          icon: "query_stats",
        },
        {
          label: "History",
          href: "/history",
          icon: "menu_book",
        },
      ],
    };
  },
};
</script>
