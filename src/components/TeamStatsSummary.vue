<template>
  <InfoContainer :title="title">
    <q-list bordered class="rounded-borders">
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
                <q-item-label caption>Total</q-item-label>
                <q-item-label class="text-bold">{{ stat.value }}</q-item-label>
              </div>
              <div class="column col-6">
                <q-item-label caption>Rank</q-item-label>
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

export default {
  name: "TeamStatsSummary",
  setup() {
    const store = useTeamStore();
    const selectedTeam = computed(() => store.selectedTeam);
    const title = `${new Date().getFullYear()} Stats`;
    return {
      selectedTeam,
      title,
    };
  },
  data() {
    return {
      dataPoints: [],
    };
  },
  components: {
    InfoContainer,
  },
  watch: {
    selectedTeam: function (val) {
      getTeamStats(val.id).then(({ statistics }) => {
        console.log(
          `some stats for ${val.name}`,
          statistics?.splits?.categories
        );
        this.dataPoints = statistics?.splits?.categories;
      });
    },
  },
};
</script>
