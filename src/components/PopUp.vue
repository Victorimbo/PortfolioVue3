<template>
  <div v-if="show" class="popup">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <button @click="$emit('confirm')">Confirm</button>
  </div>
</template>

<script>
export default {
  name: 'PopUp',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.popup {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
