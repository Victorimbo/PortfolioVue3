<template>
  <div>
<a href="/assets/Victor-imbo.pdf" download="Victor-Imbo.pdf">Download Me!</a>
    <TypeWriter />
  </div>
  
</template>

<script>
import TypeWriter from '../TypeWriter.vue';
export default {
  name: 'About',
  components: {
    TypeWriter,
  },
  data() {
    return {
      activeComponent: "About",
    };
  },
}
</script>