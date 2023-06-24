<template>
  <div>
      <h1 class="Home">Hi I'm Victor,</h1>
      <h2>Web Developer student at Epitech Lyon, France</h2>
  </div>
    <!-- <p class="resume">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et viverra nisi, quis lobortis ipsum.
      Fusce interdum neque magna, non porta libero ullamcorper et. Duis bibendum tortor in felis dictum aliquam.
      Ut scelerisque, justo id ornare lobortis, elit mauris lacinia augue, ut fermentum tellus urna vel sem.
      Pellentesque eu congue.</p> -->
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      activeComponent: "Home",
    };
  },
  computed() {
    return this.store.state.darkMode ? 'custom-dark' : 'custom-light';
  },
};
</script>
