<template>
  <b-container>
    <h1>Create Menu</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="Select Restaurant">
        <b-form-select v-model="menu.restaurantId" :options="restaurantsOption"></b-form-select>
      </b-form-group>
      <b-form-group label="Menu category">
        <b-form-select v-model="menu.category" :options="menuCategories"></b-form-select>
      </b-form-group>
    </b-form>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { menuInitialState } from '@/model/menu';

  export default Vue.extend({

    data() {
      return {
        menu: menuInitialState()
      };
    },

    computed: {
      restaurants(): any {
        return this.$store.getters.restaurants;
      },

      restaurantsOption(): any {
        return this.$store.getters.restaurantsOption;
      },

      menuCategories(): any {
        return this.$store.getters.menuCategories;
      }
    },

    created() {
      this.$store.dispatch('getAllRestaurants');
      this.$store.dispatch('getAllMenuCategories');
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
