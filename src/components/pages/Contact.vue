<template>
    <div>
      <FormContact />
    </div>
</template>

<script>
import FormContact from '../FormContact.vue';

export default {
  name: 'Contact',
  components: {
    FormContact,
  },
  data() {
    return {
      activeComponent: "Contact",
    };
  },

};
</script>
