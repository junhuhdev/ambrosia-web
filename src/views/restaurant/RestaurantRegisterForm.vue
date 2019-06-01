<template>
  <b-container>
    <h1>Register restaurant</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="Name">
        <b-form-input v-model="restaurant.name" required/>
      </b-form-group>
      <b-form-group label="Description">
        <b-form-textarea placeholder="Describe restaurant summary..." rows="5" v-model="restaurant.description"/>
      </b-form-group>
      <b-form-group label="Status">
        <b-form-select v-model="statusSelected" :options="status"/>
      </b-form-group>
      <b-form-group label="Recipient Limit">
        <b-form-input v-model="restaurant.recipientLimit.from"/>
        <b-form-input v-model="restaurant.recipientLimit.to"/>
      </b-form-group>
    </b-form>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { Restaurant, restaurantInitialState } from '@/model/restaurant';

  export default Vue.extend({

    data() {
      return {
        restaurant: restaurantInitialState(),
        statusSelected: null,
        status: [
          {value: 'ACTIVE', text: 'ACTIVE'},
          {value: 'INACTIVE', text: 'INACTIVE'}
        ]
      };
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
