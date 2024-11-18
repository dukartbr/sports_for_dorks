<template>
  <q-btn-dropdown color="primary" unelevated :label="selectedYear">
    <q-list>
      <q-item
        v-for="year in years"
        :key="year"
        @click="changeYear(year)"
        clickable
        v-close-popup
        dense
      >
        <q-item-label>{{ year }}</q-item-label>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {
  props: ["year"],
  data() {
    return {
      selectedYear: this.year,
    };
  },
  computed: {
    years() {
      return Array.from(
        { length: new Date().getFullYear() - 1990 + 1 },
        (_, i) => 1990 + i
      );
    },
  },
  methods: {
    changeYear(year) {
      this.selectedYear = year;
      this.$emit("yearChanged", year);
    },
  },
};
</script>
