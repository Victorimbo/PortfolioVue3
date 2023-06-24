<template>
	<div id="container">
	  <button @click="toggleDarkMode" class="dark-mode">
		<span class="circle" aria-hidden="true">
		  <span class="icon arrow"></span>
		</span>
		<span class="button-text">{{ buttonText }}</span>
	  </button>
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
	  
	  // Propriété calculée pour déterminer le texte à afficher sur le bouton
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
  button.dark-mode {
    width: 12rem;
  }
}
@media (max-width: 767px) {
  button.dark-mode {
    width: 8rem;
  }
}

/* theme */

[theme="custom-dark"] {
  background-color: lightgreen;
  color: darkviolet;
}
[theme="custom-light"] {
  background-image: url('/assets/60s.jpg');
  color: black;
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
  content: "60s mode";
}

[theme="custom-light"] .button-text {
  content: "70s mode";
}

/* button */

 button {
	 position: relative;
	 display: inline-block;
	 cursor: pointer;
	 outline: none;
	 border: 0;
	 vertical-align: middle;
	 text-decoration: none;
	 background: transparent;
	 padding-top: 0;
	 font-family: 'technique';
}

 button.dark-mode .circle {
	 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	 position: relative;
	 display: block;
	 margin: 0;
	 width: 3rem;
	 height: 3rem;
	 background: #282936;
	 border-radius: 1.625rem;
}
 button.dark-mode .circle .icon {
	 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	 position: absolute;
	 top: 0;
	 bottom: 0;
	 margin: auto;
	 background: #fff;
}
 button.dark-mode .circle .icon.arrow {
	 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	 left: 0.625rem;
	 width: 1.125rem;
	 height: 0.125rem;
	 background: none;
}
 button.dark-mode .circle .icon.arrow::before {
	 position: absolute;
	 content: '';
	 top: -0.25rem;
	 right: 0.0625rem;
	 width: 0.625rem;
	 height: 0.625rem;
	 border-top: 0.125rem solid #fff;
	 border-right: 0.125rem solid #fff;
	 transform: rotate(45deg);
}
 button.dark-mode .button-text {
	 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	 position: absolute;
	 top: 0;
	 left: 0;
	 right: 0;
	 bottom: 0;
	 padding: 0.75rem 0;
	 margin: 0 0 0 1.85rem;
	 color: #282936;
	 font-weight: 700;
	 line-height: 1.6;
	 text-align: center;
	 text-transform: uppercase;
}
 button:hover .circle {
	 width: 100%;
}
 button:hover .circle .icon.arrow {
	 background: #fff;
	 transform: translate(1rem, 0);
}
 button:hover .button-text {
	 color: #fff;
}
 
</style>
