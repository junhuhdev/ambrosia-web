<template>
  <b-container>
    <h1>Register meal</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="Select Restaurant">
        <b-form-select v-model="menu.restaurantId" :options="restaurantsOption"></b-form-select>
      </b-form-group>
      <b-form-group label="Select Restaurant Menu">
        <b-form-select></b-form-select>
      </b-form-group>
      <b-form-group>
        <b-button type="submit" variant="primary">Create</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mealInitialState } from '@/model/meal';

  export default Vue.extend({

    data() {
      return {
        meal: mealInitialState()
      };
    },

    computed: {},

    created() {

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
