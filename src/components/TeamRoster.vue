<template>
  <InfoContainer title="Current Roster">
    <div class="infoContainerList">
      <q-list bordered separator dense>
        <q-item
          clickable
          v-ripple
          v-for="athlete in roster"
          :key="athlete.id"
          class="rosterItem"
          @click="showPlayerDetails(athlete)"
        >
          <div class="row">
            <q-avatar size="xl">
              <img :src="athlete.headshot?.href" style="width: 100px" />
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
  <q-dialog v-model="showModal">
    <PlayerDetails :player="currentPlayerDetails" />
  </q-dialog>
</template>

<script>
import { computed } from "vue";
import { useTeamStore } from "src/stores/team";
import { getTeamRoster, getPlayerDetails } from "../api/requests";
import InfoContainer from "./InfoContainer.vue";
import PlayerDetails from "./PlayerDetails.vue";

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
      showModal: false,
      currentPlayerDetails: null,
      roster: [],
    };
  },
  components: {
    InfoContainer,
    PlayerDetails,
  },
  methods: {
    showPlayerDetails: function (val) {
      getPlayerDetails(val.id).then((res) => {
        this.showModal = true;
        this.currentPlayerDetails = res.athlete;
      });
    },
  },
  watch: {
    selectedTeam: function (val) {
      getTeamRoster(val.id).then((res) => {
        this.roster = res.athletes.sort((a, b) =>
          a.jersey > b.jersey ? 1 : -1
        );
      });
    },
  },
};
</script>
