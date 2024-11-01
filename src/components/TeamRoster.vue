<template>
  <InfoContainer title="Roster">
    <div id="rosterContainerList" class="infoContainerList">
      <q-list bordered separator dense>
        <q-item clickable v-ripple v-for="athlete in roster" :key="athlete.id">
          <q-item-section>
            <q-item-label>{{ athlete.fullName }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div>This is the roster</div>
  </InfoContainer>
</template>

<script>
import { computed } from "vue";
import { useTeamStore } from "src/stores/team";
import { getTeamRoster } from "../api/requests";
import InfoContainer from "./InfoContainer.vue";

export default {
  name: "TeamRoster",
  setup() {
    const store = useTeamStore();
    const selectedTeam = computed(() => store.selectedTeam);
    return {
      selectedTeam,
    };
  },
  data() {
    return {
      roster: [],
    };
  },
  components: {
    InfoContainer,
  },
  watch: {
    selectedTeam: function (val) {
      getTeamRoster(val.id).then((res) => {
        console.log("res", res);
        this.roster = res.athletes;
      });
    },
  },
};
</script>
