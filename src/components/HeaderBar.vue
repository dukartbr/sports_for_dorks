<style scoped>
.teamListItem {
  width: 300px;
  text-align: center;
}
</style>

<template>
  <q-toolbar class="row items-center q-py-sm q-px-lg" style="width: 100%">
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="toggleRouterSidebar"
    />
    <q-toolbar-title>Sports4Dorks</q-toolbar-title>
    <q-space />
    <q-btn-dropdown
      color="secondary"
      unelevated
      :label="label"
      :icon="selectedTeam ? `img:${selectedTeam.logos[0].href}` : ''"
    >
      <q-list>
        <q-item
          v-for="team in teams"
          :key="team.id"
          class="hover-bg-color teamListItem"
          clickable
          v-close-popup
          @click="setTeam(team)"
          dense
        >
          <div class="row">
            <q-item-section>
              <q-img :src="team.logos[0].href" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ team.name }}</q-item-label>
            </q-item-section>
          </div>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-toolbar>
</template>

<script>
import { computed } from "vue";
import { getNFLTeams } from "../api/requests";
import { useTeamStore } from "src/stores/team";

export default {
  setup() {
    const store = useTeamStore();
    const selectedTeam = computed(() => store.selectedTeam);
    const setTeam = function (team) {
      store.setTeam({ ...team });
    };

    return {
      setTeam,
      selectedTeam,
    };
  },
  data() {
    return {
      teams: [],
    };
  },
  created() {
    getNFLTeams().then(({ teams }) => (this.teams = { ...teams }));
  },
  methods: {
    toggleRouterSidebar: function () {
      this.$emit("toggle-sidebar");
    },
  },
  computed: {
    label() {
      return this.selectedTeam ? this.selectedTeam.name : "Select a Team";
    },
  },
};
</script>
