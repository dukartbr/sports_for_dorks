<template>
  <InfoContainer :title="`${seasonYear} Season`">
    <q-list bordered separator dense>
      <q-item clickable v-ripple v-for="event in events" :key="event">
        <q-item-section>
          <q-item-label>{{ event?.shortName }}</q-item-label>
          <q-item-label caption>{{ event?.week?.text }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </InfoContainer>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useTeamStore } from "src/stores/team";
import { getTeamSchedule } from "src/api/requests";
import InfoContainer from "./InfoContainer.vue";

export default defineComponent({
  name: "TeamSchedule",
  setup() {
    const store = useTeamStore();
    const selectedTeam = computed(() => store.selectedTeam);
    return {
      selectedTeam,
    };
  },
  data() {
    return {
      seasonYear: "",
      events: ["Milk", "Eggs", "Coffee"],
    };
  },
  components: {
    InfoContainer,
  },
  watch: {
    selectedTeam: function (val) {
      getTeamSchedule(val.id).then((res) => {
        console.log("the most res", res);
        console.log("year", res.requestedSeason.year);
        this.seasonYear = res.requestedSeason.year;
        this.events = res.events;
      });
    },
  },
});
</script>
