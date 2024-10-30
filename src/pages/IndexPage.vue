<template>
  <q-page class="row pageContainer">
    <div class="column col-9">
      <div class="row col-6">
        <InfoContainer title="News"> </InfoContainer>
      </div>
      <div class="row col-6">
        <InfoContainer title="Roster"> </InfoContainer>
        <InfoContainer title="Betting"> </InfoContainer>
      </div>
    </div>
    <div class="col-3" style="display: flex">
      <TeamSchedule />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import InfoContainer from "../components/InfoContainer.vue";
import TeamSchedule from "../components/TeamSchedule.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    InfoContainer,
    TeamSchedule,
  },
});
</script>
