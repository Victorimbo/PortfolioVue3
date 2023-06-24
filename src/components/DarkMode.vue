<template>
	<div id="container">
	  <span @click="toggleDarkMode">
		<div class="wrapper">
		<img src="/assets/diamond.png" alt="Mon icône" class="mode"/>
		<span class="button-text">{{ buttonText }}</span>
	</div>
	</span>
	</div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
	name: 'DarkMode',
	setup() {
	  const store = useStore();
	  const toggleDarkMode = () => {
		store.state.darkMode = !store.state.darkMode;
	  };
	  	  const buttonText = computed(() => {
		return store.state.darkMode ? '70s mode' : '60s mode';
	  });
	  
	  return {
		toggleDarkMode,
		buttonText,
	  };
	},
  };
  </script>
  

<style>

@media (min-width: 768px) {
  .mode {
    width: 6rem;
  }
}
@media (max-width: 767px) {
  .mode {
    width: 3rem;
}
.button-text {
	font-size: 12px;
}
}
.mode {
  transition: transform 0.5s ease;
}

.mode:hover {
  transform: rotate(360deg);
}
.wrapper {
	position: relative;
}
/* theme */

[theme="custom-dark"] {
  background-image: url('/assets/70s.jpg');
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-position: center;
  background-repeat: no-repeat;
  animation: backgroundAnimation 60s infinite linear;
}
[theme="custom-light"] {
  background-image: url('/assets/60s.jpg');
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-position: center;
  background-repeat: no-repeat;
  animation: backgroundAnimation 60s infinite linear;
}

@keyframes backgroundAnimation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

[theme="custom-dark"] .button-text {
  content: "70s mode";
}

[theme="custom-light"] .button-text {
  content: "60s mode";
}

/* button */

.button-text {
  position: absolute;
  top: 50%;
  left: 50%;
  color: red;
  font-weight: bold;
  transform: translate(-50%, -50%);
}

.button-text:hover {
	cursor: pointer;
}

</style>
