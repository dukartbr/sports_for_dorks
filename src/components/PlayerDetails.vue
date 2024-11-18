<script setup></script>

<style scoped>
.infoModal {
  max-width: 800px;
}
.modalInfoContainer {
  padding: 1rem;
}
.statRow {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
</style>

<template>
  <InfoContainer :title="player.displayName" class="infoModal">
    <div class="modalInfoContainer">
      <div class="row">
        <div class="column col-6">
          <q-avatar color="primary" size="200px" text-color="white">
            <img :src="player.headshot.href" style="width: 300px" />
          </q-avatar>
        </div>
        <div class="column col-6">
          <div class="row text-bold text-h4">
            {{ player.displayName }}
          </div>
          <div class="row text-bold text-h6">
            #{{ player.jersey }} {{ player.position.displayName }}
          </div>
          <div class="row" style="align-items: center">
            <span class="text-bold text-blue-grey-7"
              >Age: {{ player.age }}&nbsp;-&nbsp;{{ player.displayExperience }}
            </span>
            <q-space />
            <q-chip :color="player.active ? 'teal' : 'red'" text-color="white">
              {{ player.active ? "Active" : "Inactive" }}
            </q-chip>
          </div>
          <q-separator />
          <div class="row">
            <div
              class="column col-12"
              v-for="statRow in player.statsSummary.statistics"
              :key="statRow"
            >
              <div class="row statRow">
                <span>{{ statRow.displayName }}:</span>
                <q-space />
                <span v-if="statRow.value" class="text-bold">
                  {{ Math.round(statRow.value * 100) / 100 }}&nbsp;{{
                    statRow.abbreviation
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="player.injuries?.length > 0"
        class="row bg-red-5 text-white q-pa-sm"
      >
        <span>{{ player.injuries[0].shortComment }}</span>
      </div>
    </div>
  </InfoContainer>
</template>

<script>
import InfoContainer from "./InfoContainer.vue";

export default {
  name: "PlayerDetails",
  props: ["player"],
  components: {
    InfoContainer,
  },
  mounted() {
    console.log("player", this.player);
  },
};
</script>
