<template>
  <b-container>
    <h1>Create Restaurant</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-col cols="6">
          <b-form-group label="Name">
            <b-form-input v-model="restaurant.name" required/>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Status">
            <b-form-select v-model="restaurant.status" :options="statusOptions"/>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Description">
            <b-form-textarea placeholder="Describe restaurant summary..." rows="5" v-model="restaurant.description"/>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Recipient Limit From">
            <b-form-input v-model="restaurant.recipientLimit.from"/>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Recipient Limit To">
            <b-form-input v-model="restaurant.recipientLimit.to"/>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Minimum Order Amount">
            <b-form-input v-model="restaurant.minimumOrderAmount.amount"/>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Minimum Order Amount Currency">
            <b-form-select v-model="restaurant.minimumOrderAmount.currency" :options="currency"/>
          </b-form-group>
        </b-col>
      </b-row>
      <b-card>
        <b-form-group label="Shipping Address">
          <b-form-group label-cols-sm="3" label="Street:" label-align-sm="right" label-for="nested-street">
            <b-form-input v-model="restaurant.address.street" id="nested-street"></b-form-input>
          </b-form-group>
          <b-form-group label-cols-sm="3" label="Postal code:" label-align-sm="right" label-for="nested-postal-code">
            <b-form-input v-model="restaurant.address.postalCode" id="nested-postal-code"></b-form-input>
          </b-form-group>
          <b-form-group label-cols-sm="3" label="Country:" label-align-sm="right" label-for="nested-country">
            <b-form-input v-model="restaurant.address.country" id="nested-country"></b-form-input>
          </b-form-group>
          <b-form-group label-cols-sm="3" label="City:" label-align-sm="right" label-for="nested-city">
            <b-form-input v-model="restaurant.address.city" id="nested-city"></b-form-input>
          </b-form-group>
          <b-form-group label-cols-sm="3" label="State:" label-align-sm="right" label-for="nested-state">
            <b-form-input v-model="restaurant.address.state" id="nested-state"></b-form-input>
          </b-form-group>
        </b-form-group>
      </b-card>
      <br/>
      <b-form-group>
        <b-button type="submit" variant="primary">Create Restaurant</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import router from '@/router';
  import { currencyOptions } from '@/model/money';
  import { restaurantInitialState, restaurantStatusOptions } from '@/model/model-initialstate';

  export default Vue.extend({

    data() {
      return {
        restaurant: restaurantInitialState(),
        statusOptions: restaurantStatusOptions(),
        currency: currencyOptions()
      };
    },

    methods: {
      async onSubmit(e: Event) {
        e.preventDefault();
        const response = await this.$store.dispatch('insertRestaurant', this.restaurant);
        router.push({name: 'restaurant-detail', params: {id: response.id}});
      },

      onReset(e: Event) {
        e.preventDefault();
      }
    }

  });
</script>
<style scoped>
</style>
