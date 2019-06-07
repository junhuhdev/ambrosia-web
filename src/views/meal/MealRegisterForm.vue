<template>
  <b-container>
    <h1>Create Meal</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="Select Restaurant">
        <b-form-select v-model="selectedRestaurant" :options="restaurantsOption"></b-form-select>
      </b-form-group>
      <b-form-group v-if="selectedRestaurant !== ''" label="Select Restaurant Menu">
        <b-form-select v-model="meal.menuId" :options="menuOptions"></b-form-select>
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
        selectedRestaurant: '',
        menuOptions: []
      };
    },

    computed: {
      restaurantsOption(): any {
        return this.$store.getters.restaurantsOption;
      },

    },

    watch: {
      selectedRestaurant(newVal, oldVal) {
        if (newVal !== null) {
          this.getMenuById(newVal);
        }
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
      },

      getMenuById(restaurantId: string) {
        if (restaurantId !== '') {
          this.$store.dispatch('searchMenus', this.selectedRestaurant);
          this.menuOptions = this.$store.getters.menuOptions;
        }
      }
    }

  });
</script>
<style scoped>
</style>
