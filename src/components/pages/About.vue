<template>
  <div>
    <p>Bored by studies in high school, I started to work at 18 in hospitality. I was a bartender for 7 years in France and United kingdom.<br>
    Some times ago I realised I wanted to go back to studies in something that intereted me : Programming. I started studying at Epitech in november 2022.<br>
    I have never code before but it feels great overall ! You want to know more about me ? 
    <a href="/assets/Victor-imboEpitech.pdf" download="Victor-Imbo.pdf">Download my awesome CV !</a>
    <p>My main competencies are :</p>
    <p>Conceptualize a web solution (write a specification, deploy a work environnment, Write a presentation, ...)</p>
    <p>Develop a web solution (write the solution code, implement front-end and database, deploy the solution, ...)</p>
    <p>Deploy a quality assurance system throughout the life cycle of a web solution (write documentation, improve the solution, fix bugs, ...)</p>
    </p>

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