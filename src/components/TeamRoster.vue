<template>
  <InfoContainer title="Roster">
    <div class="infoContainerList">
      <q-list bordered separator dense>
        <q-item
          clickable
          v-ripple
          v-for="athlete in roster"
          :key="athlete.id"
          class="rosterItem"
        >
          <div class="row">
            <q-avatar size="xl">
              <img :src="athlete.headshot?.href" />
            </q-avatar>
          </div>

          <q-item-section>
            <q-item-label
              >{{ athlete.jersey }} - {{ athlete.fullName }}</q-item-label
            >
            <q-item-label caption>{{ athlete.position }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
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
        this.roster = res.athletes;
      });
    },
  },
};
</script>
