<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
      >
        <v-img
            class="white--text"
            height="300px"
            :src="imgSource"
        >
          <v-card-title class="justify-center fill-height">{{title}}</v-card-title>
        </v-img>
        <v-fade-transition>
          <v-overlay
              v-if="hover"
              absolute
              color="#036358"
          >
            <v-btn>Se vårt {{title}} utbud</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      imgSource: String,
      title: String
    },

    data: () => ({
      hover: false
    })

  });
</script>
<style scoped>
</style>
