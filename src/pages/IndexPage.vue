<template>
  <q-page class="row pageContainer">
    <div class="column col-9">
      <div class="row col-6">
        <TeamNews />
      </div>
      <div class="row col-6">
        <div class="column col-4">
          <TeamRoster />
        </div>
        <div class="column col-8">
          <TeamStatsSummary />
        </div>
      </div>
    </div>
    <div class="column col-3">
      <TeamSchedule />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TeamSchedule from "../components/TeamSchedule.vue";
import TeamRoster from "../components/TeamRoster.vue";
import TeamNews from "../components/TeamNews.vue";
import TeamStatsSummary from "../components/TeamStatsSummary.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    TeamSchedule,
    TeamRoster,
    TeamNews,
    TeamStatsSummary,
  },
});
</script>
