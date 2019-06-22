<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Create Menu</h1>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-row>
            <b-col>
              <b-form-group label="Select Restaurant">
                <b-form-select v-model="selectedRestaurant" :options="restaurantsOption"></b-form-select>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Menu category">
                <b-form-select v-model="menu.category" :options="menuCategories"></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group>
            <b-button type="submit" variant="primary">Create Menu</b-button>
          </b-form-group>
        </b-form>
      </b-col>
      <b-col>
        <div v-if="restaurantMenuMeals.length > 0">
          <b-table :items="restaurantMenuMeals" :fields="fields">
          </b-table>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { menuInitialState } from '@/model/model-initialstate';

  export default Vue.extend({

    data() {
      return {
        menu: menuInitialState(),
        selectedRestaurant: '',
        fields: ['menu', 'name', 'description', 'amount', 'amountCy']
      };
    },

    computed: {
      restaurantMenuMeals(): any {
        return this.$store.getters.restaurantDetailsMenuMeals;
      },

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

    watch: {
      selectedRestaurant(newVal, oldVal) {
        if (newVal !== null) {
          this.getRestaurantDetail(newVal);
        }
      }
    },

    created() {
      this.$store.dispatch('selectRestaurants');
      this.$store.dispatch('selectMenuCategories');
    },

    methods: {
      async onSubmit(e: Event) {
        e.preventDefault();
        const response = await this.$store.dispatch('insertMenu', this.menu);
      },

      onReset(e: Event) {
        e.preventDefault();
      },

      getRestaurantDetail(restaurantId: string) {
        if (restaurantId !== '') {
          this.$store.dispatch('selectRestaurant', this.selectedRestaurant);
        }
      }
    }

  });
</script>
<style scoped>
</style>
