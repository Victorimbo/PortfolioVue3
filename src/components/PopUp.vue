<template>
  <div v-if="show" class="popup">
    <div class="popup-content">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <a :href="project.link" target="_blank" rel="noopener noreferrer">View the GitHub repo</a><br>
    <button class="close" @click="$emit('confirm')">Close</button>
  </div>
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
  background-color: darkblue;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 50%;
  height: 50%;
}

.popup-content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

button {
  font-family: 'Alba';
  outline: none;
  border: 1px red solid;
  border-radius: 10px;
  cursor: pointer;
  margin: 50px;
  font-size: 30px;
  background-color: darkblue;
  color: red;
}

button:hover {
  color: white;
  border: black;
  background-color: black;
}
</style>
