<template>
  <b-container>
    <h1>Create Meal</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="Select Restaurant">
        <b-form-select v-model="selectedRestaurant" :options="restaurantsOption"></b-form-select>
      </b-form-group>
      <b-form-group v-show="selectedRestaurant !== ''" label="Select Restaurant Menu">
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
        meal: mealInitialState(),
        selectedRestaurant: ''
      };
    },

    computed: {
      restaurantsOption(): any {
        return this.$store.getters.restaurantsOption;
      },

      menusOption(): any {

      }

    },

    created() {
      this.$store.dispatch('getAllRestaurants');
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
