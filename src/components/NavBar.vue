<template>
  <div class="navbar">
    <ul>
      <li :class="{ active: activeComponent === 'Home' }" @click="handleClick('Home')">Home</li>
      <li :class="{ active: activeComponent === 'About' }" @click="handleClick('About')">About</li>
      <li :class="{ active: activeComponent === 'Projects' }" @click="handleClick('Projects')">Projects</li>
      <li :class="{ active: activeComponent === 'Contact' }" @click="handleClick('Contact')">Contact</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    activeComponent: {
      required: true,
    },
  },
  methods: {
    changeComponent(componentId) {
      this.$emit('change-component', componentId);
    },
    handleClick(componentId) {
      this.changeComponent(componentId);
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  justify-content: center;
}

li {
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  transition: all 500ms;
  width: 100px;
  font-family: 'technique';
}

li:hover {
  font-size: 32px;
  font-size-adjust: 20px;
}

li.active {
  color: white;
  font-weight: bold;
}

/* Styles responsive */
@media (max-width: 768px) {
  ul {
    flex-direction: column;
    align-items: center;
  }

  li {
    width: auto;
  }
}
</style>
