<template>
  <v-card class="elevation-12">
    <v-img
        class="white--text"
        height="300px"
        :src="imgSource"
    >
    </v-img>
    <v-card-text>
      <span class="headline small">{{title}}</span><br><br>
      <span class="text--primary">
        <span>Danny Elmaleh är den kända stjärnkocken som sammansatt menyn på Kasai. Med fokus på enkelhet och kvalité hittar du sushirätter, bowls och boxar.</span>
      </span>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      imgSource: String,
      title: String,
      description: String
    },

    data: () => ({}),

  });
</script>
<style scoped>
</style>
