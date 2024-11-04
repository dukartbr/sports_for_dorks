<template>
  <InfoContainer title="News">
    <q-carousel animated v-model="slide" arrows infinite autoplay="2000">
      <q-carousel-slide
        v-for="article in articles"
        :key="article.dataSourceIdentifier"
        :name="article.dataSourceIdentifier"
        :img-src="article.images[0].url"
      >
        <div
          class="bg-primary absolute-bottom custom-caption q-pa-md text-white"
        >
          <div class="text-bold text-h5">{{ article.headline }}</div>
          <div class="text-subtitle2">{{ article.description }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </InfoContainer>
</template>

<script>
import { computed, ref, watch } from "vue";
import { getTeamNews } from "../api/requests";
import { useTeamStore } from "src/stores/team";
import InfoContainer from "./InfoContainer.vue";

export default {
  name: "TeamNews",
  setup() {
    const articles = ref([]);
    const slide = ref(null);

    const store = useTeamStore();
    const selectedTeam = computed(() => store.selectedTeam);

    const fetchNews = async (teamId) => {
      const res = await getTeamNews(teamId);
      articles.value = res.articles;
      if (articles.value.length > 0) {
        slide.value = articles.value[0].dataSourceIdentifier;
      }
    };

    watch(selectedTeam, (val) => {
      if (val) {
        fetchNews(val.id);
      }
    });

    if (selectedTeam.value) {
      fetchNews(selectedTeam.value.id);
    }

    return {
      articles,
      slide,
      selectedTeam,
    };
  },
  data() {
    return {};
  },
  components: { InfoContainer },
  watch: {
    selectedTeam: function (val) {
      getTeamNews(val.id).then((res) => {
        this.articles = res.articles;
      });
    },
  },
};
</script>
