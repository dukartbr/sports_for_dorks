<template>
  <InfoContainer title="Team Records">
    <div>This is the team records</div>
  </InfoContainer>
</template>

<script>
import { computed } from "vue";
import { useTeamStore } from "src/stores/team";
import { getTeamStats } from "../api/requests";
import InfoContainer from "./InfoContainer.vue";

export default {
  name: "TeamRecordsSummary",
  setup() {
    const store = useTeamStore();
    const selectedTeam = computed(() => store.selectedTeam);
    return {
      selectedTeam,
    };
  },
  components: {
    InfoContainer,
  },
};
</script>
