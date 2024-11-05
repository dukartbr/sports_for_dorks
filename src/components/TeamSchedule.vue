<template>
  <InfoContainer :title="`${seasonYear} Season`">
    <q-list bordered separator dense>
      <q-item
        clickable
        v-ripple
        v-for="event in events"
        :key="event"
        :class="
          event.competitions[0].boxscoreAvailable
            ? event.competitions[0].competitors.filter(
                (t) => t.id == selectedTeam.id
              )[0].winner
              ? 'bg-green-3'
              : 'bg-red-3'
            : ''
        "
      >
        <q-item-section>
          <q-img
            width="50%"
            :src="event.competitions[0].competitors[0].team.logos[0].href"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">{{
            event.competitions[0].competitors[0]?.score?.value
          }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label caption>{{ event.week.text }}</q-item-label>
          <q-item-label>{{ event.shortName }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">
            {{ event.competitions[0].competitors[1]?.score?.value }}
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-section>
            <q-img
              width="50%"
              :src="event.competitions[0].competitors[1].team.logos[0].href"
            />
          </q-item-section>
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
      events: [],
    };
  },
  components: {
    InfoContainer,
  },
  watch: {
    selectedTeam: function (val) {
      getTeamSchedule(val.id).then((res) => {
        this.seasonYear = res.requestedSeason.year;
        console.log("res", res);
        this.events = res.events;
      });
    },
  },
});
</script>
