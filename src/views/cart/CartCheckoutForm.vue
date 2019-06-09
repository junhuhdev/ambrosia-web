<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="Datum & Tid">
        <b-form-input></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({

    data() {
      return {

      };
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
