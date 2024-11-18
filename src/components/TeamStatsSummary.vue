<template>
  <InfoContainer title="Stats By Year">
    <template #action>
      <YearSelect :year="selectedYear" @yearChanged="onYearChange" />
    </template>
    <q-list bordered separator class="rounded-borders">
      <q-expansion-item
        v-for="dataPoint in dataPoints"
        expand-separator
        switch-toggle-side
        :key="dataPoint.name"
        :label="dataPoint.displayName"
      >
        <q-expansion-item
          v-for="stat in dataPoint.stats"
          :key="stat.name"
          switch-toggle-side
          dense-toggle
          bordered
          expand-separator
          :content-inset-level="1"
        >
          <template v-slot:header>
            <div class="row full-width" style="align-content: center">
              <span>{{ stat.displayName }}</span>
              <q-space />
              <q-icon name="info" color="blue-grey-5" size="xs">
                <q-tooltip>{{ stat.description }}</q-tooltip>
              </q-icon>
            </div>
          </template>
          <q-item>
            <div class="row full-width">
              <div class="column col-6">
                <q-item-label caption>Season Total</q-item-label>
                <q-item-label class="text-bold">{{ stat.value }}</q-item-label>
              </div>
              <div class="column col-6">
                <q-item-label caption>League Rank</q-item-label>
                <q-item-label class="text-bold">{{ stat.rank }}</q-item-label>
              </div>
            </div>
          </q-item>
        </q-expansion-item>
      </q-expansion-item>
    </q-list>
  </InfoContainer>
</template>

<script>
import { computed } from "vue";
import { useTeamStore } from "src/stores/team";
import { getTeamStats } from "../api/requests";
import InfoContainer from "./InfoContainer.vue";
import YearSelect from "./YearSelect.vue";

export default {
  name: "TeamStatsSummary",
  setup() {
    const store = useTeamStore();
    const selectedTeam = computed(() => store.selectedTeam);
    return {
      selectedTeam,
    };
  },
  data() {
    return {
      dataPoints: [],
      selectedYear: new Date().getFullYear(), // Define selectedYear
    };
  },
  components: {
    InfoContainer,
    YearSelect,
  },
  methods: {
    onYearChange(newYear) {
      this.selectedYear = newYear;
    },
    fetchStats() {
      getTeamStats(this.selectedTeam.id, this.selectedYear).then(
        ({ statistics }) => {
          this.dataPoints = statistics?.splits?.categories;
        }
      );
    },
  },
  watch: {
    selectedTeam: "fetchStats",
    selectedYear: "fetchStats",
  },
};
</script>
