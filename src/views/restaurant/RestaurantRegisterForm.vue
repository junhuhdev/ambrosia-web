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
            <b-form-select v-model="restaurant.status" :options="status"/>
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
      <b-card bg-variant="light">
        <b-form-group label-cols-lg="3" label="Shipping Address" label-size="lg" label-class="font-weight-bold pt-0" class="mb-0">
          <b-form-group label-cols-sm="3" label="Street:" label-align-sm="right" label-for="nested-street">
            <b-form-input id="nested-street"></b-form-input>
          </b-form-group>
          <b-form-group label-cols-sm="3" label="Postal code:" label-align-sm="right" label-for="nested-postal-code">
            <b-form-input id="nested-postal-code"></b-form-input>
          </b-form-group>
          <b-form-group label-cols-sm="3" label="Country:" label-align-sm="right" label-for="nested-country">
            <b-form-input id="nested-country"></b-form-input>
          </b-form-group>
          <b-form-group label-cols-sm="3" label="City:" label-align-sm="right" label-for="nested-city">
            <b-form-input id="nested-city"></b-form-input>
          </b-form-group>
          <b-form-group label-cols-sm="3" label="State:" label-align-sm="right" label-for="nested-state">
            <b-form-input id="nested-state"></b-form-input>
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
  import { Restaurant, restaurantInitialState } from '@/model/restaurant';
  import router from '@/router';

  export default Vue.extend({

    data() {
      return {
        restaurant: restaurantInitialState(),
        status: [
          {value: 'ACTIVE', text: 'ACTIVE'},
          {value: 'INACTIVE', text: 'INACTIVE'}
        ],
        currency: [
          {value: 'SEK', text: 'SEK'},
          {value: 'NOK', text: 'NOK'},
          {value: 'EUR', text: 'EUR'}
        ]
      };
    },

    methods: {
      async onSubmit(e: Event) {
        e.preventDefault();
        const response = await this.$store.dispatch('createRestaurantDetails', this.restaurant);
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
