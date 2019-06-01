<template>
  <b-container>
    <h1>Register restaurant</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group>
        <b-form-input></b-form-input>
      </b-form-group>
    </b-form>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { Restaurant, restaurantInitialState } from '@/model/restaurant';

  export default Vue.extend({

    data() {
      return {
        restaurant: restaurantInitialState
      };
    }

  });
</script>
<style scoped>
</style>
