<template>
  <InfoContainer title="Records By Year">
    <template #action>
      <YearSelect :year="selectedYear" @yearChanged="onYearChange" />
    </template>
    <q-list bordered separator class="rounded-borders">
      <q-expansion-item
        v-for="record in records"
        expand-separator
        switch-toggle-side
        :key="record.name"
        :label="record.name"
      >
        <q-item
          v-for="stat in record.stats"
          :key="stat.name"
          switch-toggle-side
          dense-toggle
          bordered
          expand-separator
          :content-inset-level="2"
        >
          <div class="row full-width" style="align-content: center">
            <span>{{ stat.displayName }}: {{ stat.value }}</span>
            <q-space />
            <q-icon name="info" color="blue-grey-5" size="xs">
              <q-tooltip>{{ stat.description }}</q-tooltip>
            </q-icon>
          </div>
        </q-item>
      </q-expansion-item>
    </q-list>
  </InfoContainer>
</template>

<script>
import { computed } from "vue";
import { useTeamStore } from "src/stores/team";
import { getTeamRecords } from "../api/requests";
import InfoContainer from "./InfoContainer.vue";
import YearSelect from "./YearSelect.vue";

export default {
  name: "TeamRecordsSummary",
  setup() {
    const store = useTeamStore();
    const selectedTeam = computed(() => store.selectedTeam);
    return {
      selectedTeam,
    };
  },
  data() {
    return {
      records: [],
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
    fetchRecords() {
      getTeamRecords(this.selectedTeam.id, this.selectedYear).then(
        ({ items }) => {
          this.records = items;
        }
      );
    },
  },
  watch: {
    selectedTeam: "fetchRecords",
    selectedYear: "fetchRecords",
  },
};
</script>
