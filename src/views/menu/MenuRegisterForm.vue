<template>
  <b-container>
    <h1>Register menu</h1>
    <b-form>
    </b-form>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({

    data() {
      return {};
    },

    computed() {

    },

    methods: {
      onSubmit(e: Event) {
        e.preventDefault();
      },

      onReset(e: Event) {
        e.preventDefault();
      }
    }

  });
</script>
<style scoped>
</style>
