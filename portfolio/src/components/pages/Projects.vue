<template>
  <div>
    <carousel @open-popup="openPopup" />
    <pop-up class="pop-up" :show="isPopUpVisible" :project="getProjectById(selectedSlideId)" @confirm="selectedSlideId = null" />
  </div>
</template>

<script>
import Carousel from '../Carousel.vue';
import PopUp from '../PopUp.vue';
import projects from '../../constant/projects';

export default {
  name: 'Projects',
  components: {
    Carousel,
    PopUp,
  },
  data() {
    return {
      selectedSlideId: null,
    };
  },
  methods: {
    openPopup(slideId) {
      this.selectedSlideId = slideId;
    },
    getProjectById(id) {
      return projects[id] || {};
    },
  },
  computed: {
    isPopUpVisible() {
      return this.selectedSlideId !== null;
    },
  },
};
</script>
<style>
.pop-up {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
</style>
