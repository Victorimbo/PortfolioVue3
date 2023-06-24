<template>
  <div class="navbar">
    <div class="mobile-navbar" @click="toggleNavbar">
      <span class="icon" :class="{ active: isNavbarOpen }"></span>
    </div>
    <ul :class="{ 'nav-open': isNavbarOpen }">
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
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    changeComponent(componentId) {
      this.$emit('change-component', componentId);
    },
    handleClick(componentId) {
      this.changeComponent(componentId);
      this.isNavbarOpen = false;
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  justify-content: center;
}

li {
  padding: 10px 50px;
  margin: 30px;
  cursor: pointer;
  transition: all 500ms;
  width: 100px;
  font-size: 30px;
  font-family: 'technique';
}

li:hover {
  font-size: 32px;
  font-size-adjust: 20px;
}

li.active {
  color: red;
  font-weight: bold;
}

.mobile-navbar {
  display: none;
}

.icon {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 2px;
  background-color: white;
  transition: all 500ms;
}

.icon:before,
.icon:after {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: white;
  transition: all 500ms;
}

.icon:before {
  top: -8px;
}

.icon:after {
  top: 8px;
}

.icon.active {
  background-color: transparent;
}

.icon.active:before {
  transform: rotate(45deg);
  top: 0;
}

.icon.active:after {
  transform: rotate(-45deg);
  top: 0;
}

ul.nav-open {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: lightblue;
  color: orange;
  z-index: 999;
}

ul.nav-open li {
  margin: 20px;
}

/* Styles responsive */
@media (max-width: 768px) {
  .mobile-navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    transition: all 500ms;
  }

  ul {
    display: none;
  }
}
</style>
