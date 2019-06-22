<template>
  <b-container>
    <h1>Create Meal</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-col>
          <b-form-group label="Select Restaurant">
            <b-form-select v-model="selectedRestaurant" :options="restaurantsOption"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group v-if="selectedRestaurant !== ''" label="Select Restaurant Menu">
            <b-form-select v-model="meal.menuId" :options="menuOptions"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Name">
            <b-form-input/>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Description">
            <b-form-textarea placeholder="Meal summary..." rows="5" v-model="meal.description"/>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Amount">
            <b-form-input v-model="meal.amount"/>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Currency">
            <b-form-select v-model="meal.amountCy" :options="currencyOptions"/>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Types">
            <multiselect v-model="meal.types"
                         :multiple="true"
                         :options="typeOptions">
            </multiselect>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Preferences">
            <multiselect v-model="meal.preferences"
                         :multiple="true"
                         :options="preferenceOptions">
            </multiselect>
          </b-form-group>
        </b-col>
      </b-row>
      <br/>
      <b-form-group>
        <b-button type="submit" variant="primary">Create Meal</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { currencyOptions } from '@/model/money';
  import { mealInitialState } from '@/model/meal';
  import Multiselect from 'vue-multiselect';

  export default Vue.extend({

    components: {
      Multiselect
    },

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
      this.$store.dispatch('selectRestaurants');
      this.$store.dispatch('selectMealMetadata');
    },

    methods: {
      async onSubmit(e: Event) {
        e.preventDefault();
        const response = await this.$store.dispatch('insertMeal', this.meal);
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
