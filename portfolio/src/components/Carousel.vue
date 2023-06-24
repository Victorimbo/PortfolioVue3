<template>
  <MyCarousel :items-to-show="1" class="carousel">
    <slide v-for="slide in slides" :key="slide.id">
      <img @click="openPopup(slide.id)" :src="slide.image" alt="Slide" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </MyCarousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel as MyCarousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'Carousel',
  components: {
    MyCarousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        { id: 1, image: 'src/assets/spotify.png' },
        { id: 2, image: 'src/assets/mythic.png' },
        { id: 3, image: 'src/assets/quizz.jpg' },
      ],
    };
  },
  methods: {
    openPopup(slideId) {
      this.$emit('open-popup', slideId);
    },
  },
};
</script>

<style>
img {
  width: 40vh;
}

.carousel {
  width: 60vh;
}
</style>
