<template>
  <div class="bg-primary infoContainer">
    <div class="row" style="justify-content: space-between">
      <span class="title">{{ title }}</span>
      <q-btn-dropdown
        v-if="year"
        color="primary"
        unelevated
        :label="selectedYear"
      >
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
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "year"],
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
