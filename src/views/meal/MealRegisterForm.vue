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
      <b-form-group label="Name">
        <b-form-input/>
      </b-form-group>
      <b-form-group label="Description">
        <b-form-textarea placeholder="Meal summary..." rows="5" v-model="meal.description"/>
      </b-form-group>
      <b-form-group label="Amount" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-row>
          <b-col cols="4">
            <b-form-input v-model="meal.amount"/>
            <b-form-select v-model="meal.currency" :options="currencyOptions"/>
          </b-col>
        </b-form-row>
      </b-form-group>
      <b-form-group label="Types">
        <b-form-select v-model="meal.types" :options="typeOptions" multiple/>
      </b-form-group>
      <b-form-group label="Preferences">
        <b-form-select v-model="meal.preferences" :options="preferenceOptions" multiple/>
      </b-form-group>
      <br/>
      <b-form-group>
        <b-button type="submit" variant="primary">Create</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { currencyOptions } from '@/model/money';
  import { mealInitialState } from '@/model/meal';

  export default Vue.extend({

    data() {
      return {
        meal: mealInitialState(),
        selectedRestaurant: '',
        currencyOptions: currencyOptions()
      };
    },

    computed: {
      restaurantsOption(): any {
        return this.$store.getters.restaurantsOption;
      },

      menuOptions(): any {
        return this.$store.getters.menuOptions;
      },

      typeOptions(): any {
        return this.$store.getters.typeOptions;
      },

      preferenceOptions(): any {
        return this.$store.getters.preferenceOptions;
      }

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
      this.$store.dispatch('getMealMetadata');
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
        }
      }
    }

  });
</script>
<style scoped>
</style>
