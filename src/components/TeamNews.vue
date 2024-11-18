<template>
  <InfoContainer title="News">
    <template #action>
      <q-btn
        flat
        round
        color="white"
        :icon="autoplayEnabled ? 'pause' : 'play_arrow'"
        @click="autoplayEnabled = !autoplayEnabled"
      />
    </template>
    <q-carousel
      animated
      v-model="slide"
      arrows
      infinite
      :autoplay="autoplayEnabled ? 4000 : null"
    >
      <q-carousel-slide
        v-for="article in articles"
        :key="article.dataSourceIdentifier"
        :name="article.dataSourceIdentifier"
        :img-src="article.images[0].url"
        @click="showArticle(article)"
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
  <!-- <q-dialog v-model="showModal">
    <q-card>
      <q-card-section>
        <div class="text-h6">Chingy</div>
      </q-card-section>
    </q-card>
  </q-dialog> -->
</template>

<script>
import { computed, ref, watch } from "vue";
import { getTeamNews, getTeamNewsArticle } from "../api/requests";
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
    return {
      showModal: false,
      fullArticle: null,
      autoplayEnabled: true,
    };
  },
  components: { InfoContainer },
  methods: {
    showArticle: function (val) {
      console.log("val", val);
      this.showModal = true;
      getTeamNewsArticle(val.dataSourceIdentifier).then((res) => {
        console.log("res", res);
        this.fullArticle = res;
      });
    },
  },
  watch: {
    selectedTeam: function (val) {
      getTeamNews(val.id).then((res) => {
        console.log("res.articles", res.articles);
        this.articles = res.articles;
      });
    },
  },
};
</script>
