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
          <v-fade-transition>
            <v-overlay
                v-if="hover"
                absolute
                color="#036358"
            >
              <v-btn>Se meny</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-img>
        <v-card-text>
          <span class="headline small">{{title}}</span><br><br>
          <span class="text--primary">Danny Elmaleh är den kända stjärnkocken som sammansatt menyn på Kasai. Med fokus på enkelhet och kvalité hittar du sushirätter, bowls och boxar.</span>
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      imgSource: String,
      title: String,
      description: String
    },

    data: () => ({
      hover: false
    }),

  });
</script>
<style scoped>
</style>
