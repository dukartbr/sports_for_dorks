<template>
  <q-page class="row pageContainer">
    <div class="col-9" style="display: flex; flex-direction: column">
      <InfoContainer title="Schedule">
        <span>Howdy from behind!</span>
      </InfoContainer>
      <div class="row">
        <InfoContainer title="Schedule">
          <span>Howdy from behind!</span>
        </InfoContainer>
        <InfoContainer title="Schedule">
          <span>Howdy from behind!</span>
        </InfoContainer>
      </div>
    </div>
    <div class="col-3" style="display: flex">
      <InfoContainer title="Schedule">
        <span>Howdy from behind!</span>
      </InfoContainer>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import InfoContainer from "../components/InfoContainer.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    InfoContainer,
  },
});
</script>
