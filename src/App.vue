<template>
  <div class="app" @wheel="handleScroll" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" :theme="themeClass">
    <div v-if="isLoading" class="loading-overlay">
      <Loading />
    </div>
    <div class="header">
      <NavBar class="navbar" :activeComponent="activeComponent" @change-component="changeComponent" />
    </div>
    <div class="content">
      <Transition name="slide-fade">
        <component v-if="!isLoading" :is="activeComponent" @change-component="changeComponent"/>
      </Transition>
    </div>
    <div class="footer">
      <div class="dark-mode">
        <DarkMode />
      </div>
      <div class="sign">
        <Sign />
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Projects from './components/pages/Projects.vue';
import Contact from './components/pages/Contact.vue';

import NavBar from './components/NavBar.vue';
import DarkMode from './components/DarkMode.vue';
import Loading from './components/Loading.vue';
import Sign from './components/Sign.vue';

export default {
  name: 'App',
  components: {
    Home,
    About,
    Projects,
    Contact,
    NavBar,
    DarkMode,
    Sign,
    Loading,
  },
  data() {
    return {
      activeComponent: "Home",
      components: ["Home", "About", "Projects", "Contact"],
      isLoading: true,
      touchStartX: 0,
      touchEndX: 0,
    };
  },
  computed: {
    themeClass() {
      return this.$store.state.darkMode ? 'custom-dark' : 'custom-light';
    },
  },
  methods: {
    handleScroll(event) {
      let idComponent = this.components.indexOf(this.activeComponent);

      if (event.deltaY > 0 && this.activeComponent != "Contact") {
        idComponent++;
      } else if (event.deltaY < 0 && this.activeComponent != "Home") {
        idComponent--;
      }

      this.activeComponent = this.components[idComponent];
    },
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX;
    },
    handleTouchEnd() {
  let idComponent = this.components.indexOf(this.activeComponent);
  const swipeDistance = this.touchEndX - this.touchStartX;
  const threshold = 300;

  if (swipeDistance < -threshold && this.activeComponent != "Contact") {
    idComponent++;
  } else if (swipeDistance > threshold && this.activeComponent != "Home") {
    idComponent--;
  }
  this.activeComponent = this.components[idComponent];
  },

    changeComponent(componentName) {
      this.activeComponent = componentName;
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'Hamiltone';
  src: url("/assets/Hamiltone-Demo.otf") format("opentype");
}

@font-face {
  font-family: 'technique';
  src: url('/assets/techniqu.ttf');
}

@font-face {
  font-family: 'Alba';
  src: url('/assets/alba.super.ttf');
}

@font-face {
  font-family: 'nasa';
  src: url('/assets/nasalization-rg.otf');
}

.app {
  height: 96vh;
  overflow: hidden;
  border: solid black 10px;
  position: relative;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

.header {
  position: relative;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header::before,
.header::after {
  content: '';
  position: absolute;
  bottom: -3px;
  width: 50%;
  height: 3px;
  background-color: black;
}

.header::before {
  left: 0;
  border-radius: 20px 0 0 0;
}

.header::after {
  right: 0;
  border-radius: 0 20px 0 0;
}

.content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'nasa';
  font-weight: 900;
  text-align: center;
  height: 70vh;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 10vh;
}

.sign {
  margin-right: 20px;
}

.dark-mode {
  margin-left: 20px;
}

/* responsive */
@media (max-width: 768px) {
  .content-container {
    height: 20vh;
  }
}

/* transition */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
