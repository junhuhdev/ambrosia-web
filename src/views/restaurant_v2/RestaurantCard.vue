<template>
  <v-card
      :loading="loading"
      class="mx-auto my-12 elevation-12"
      max-width="410"
  >
    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
    <v-card-title>{{title}}</v-card-title>
    <v-card-text>
      <v-row align="center">
        <v-rating
            :value="4.5"
            color="amber"
            half-increments
            dense
            size="14"
            readonly
        ></v-rating>
        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>
      <div class="my-4 subtitle-1 black--text">
        $ • Italian, Cafe
      </div>
      <div>{{description}}</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <div class="title text--primary">Kvällens tillgänglighet</div>
      <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
      >
        <v-chip>5:30PM</v-chip>
        <v-chip>7:30PM</v-chip>
        <v-chip>8:00PM</v-chip>
        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
  import Vue from 'vue';


  export default Vue.extend({
    props: {
      title: String,
      description: String
    },

    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve() {
        this.loading = true;

        setTimeout(() => (this.loading = false), 2000);
      },
    },
  });
</script>
<style scoped>
</style>
