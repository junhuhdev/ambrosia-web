<template>
  <b-container>
    <h1>Edit Meal</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-col>
          <b-form-group label="Name">
            <b-form-input v-model="meal.name" />
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
  import Multiselect from 'vue-multiselect';
  import { mealInitialState } from '@/model/model-initialstate';

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

    props: ['id'],

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

    async mounted() {
      console.log('MOUNTED ' + this.id);
      const response = await this.$store.dispatch('getMealDetails', this.id);
      this.meal = Object.assign({}, this.meal, response);
    },


    created() {
      this.$store.dispatch('getAllRestaurants');
      this.$store.dispatch('getMealMetadata');
    },

    methods: {
      async onSubmit(e: Event) {
        e.preventDefault();
        const response = await this.$store.dispatch('createMealDetails', this.meal);
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
