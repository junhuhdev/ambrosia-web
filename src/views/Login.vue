<template>
  <b-container>
    <h1>Login</h1>
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-input v-model="username" type="text" placeholder="Username" required/>
      </b-form-group>
      <b-form-group :invalid-feedback="invalidFeedback">
        <b-form-input v-model="password" type="password" placeholder="Password" required/>
      </b-form-group>
      <div class="text-center">
        <b-button type="submit" variant="primary" block>Sign In</b-button>
        <b-button variant="link" @click="$emit('swap-form')">Sign Up?</b-button>
      </div>
    </b-form>
  </b-container>
</template>
<script>
 import axios from 'axios';

 export default {
  name: 'Login',

  data () {
   return {
    username: '',
    password: '',
    errors: []
   };
  }

 };
</script>
<style scoped>
</style>
