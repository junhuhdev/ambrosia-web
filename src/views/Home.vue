<template>
  <v-container>
    <v-parallax class="elevation-12" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-row align="center" justify="center">
        <h1 class="display-2 mb-4">Catering levererad till ditt företag</h1>
      </v-row>
    </v-parallax>
    <br><br>
    <v-row align="center" justify="center">
      <div><h1>Bra och god mat på jobbet. Made easy.</h1></div>
    </v-row>
    <br><br>
    <v-row>
      <v-col cols="3" v-for="selectedFood in todaySelectedFoods" :key="selectedFood.title">
        <TodayFoodCard
            v-bind:img-source="selectedFood.imgSrc"
            v-bind:title="selectedFood.title"
            v-bind:description="selectedFood.description"
        ></TodayFoodCard>
      </v-col>
    </v-row>
    <br><br>
    <v-row align="center" justify="center">
      <div><h1>Catering för alla tillfällen</h1></div>
    </v-row>
    <br><br>
    <v-row>
      <v-col cols="3" v-for="foodCategoryCard in foodCategoryCards">
        <FoodCategoryCard
            v-bind:img-source="foodCategoryCard.imgSrc"
            v-bind:title="foodCategoryCard.title"
        ></FoodCategoryCard>
      </v-col>
    </v-row>
    <br><br><br><br><br><br>
  </v-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import TodayFoodCard from '@/components/cards/TodayFoodCard.vue';
  import FoodCategoryCard from '@/components/cards/FoodCategoryCard.vue';

  export default Vue.extend({
    components: {
      TodayFoodCard,
      FoodCategoryCard
    },

    data: () => ({
      todaySelectedFoods: [
        {imgSrc: 'https://caterbee.blob.core.windows.net/caterbee/home/featured/kasai-catering.jpg', title: 'Nyhet - Kasai', description: 'Danny Elmaleh är den kända stjärnkocken som sammansatt menyn på Kasai. Med fokus på enkelhet och kvalité hittar du sushirätter, bowls och boxar.'},
        {imgSrc: 'https://caterbee.blob.core.windows.net/caterbee/home/featured/julbord-catering.jpg', title: 'Boka årets julbord', description: 'Traditionellt, vegansk eller spanskt julbord? Vi har samlat årets julbord här.'},
        {imgSrc: 'https://caterbee.blob.core.windows.net/caterbee/home/featured/isabellesmarketdelivery-catering.jpg', title: 'Isabelle\'s Market Delivery', description: 'Ett nytt koncept från våra favorit pizzamakare. På menyn hittar du prisvärda frukostar och luncher.'},
        {imgSrc: 'https://caterbee.blob.core.windows.net/caterbee/home/featured/kanelbullensdag-bythebakery.jpg', title: 'Fira kanelbullens dag', description: 'Den 4 oktober är dagen då 7 miljoner kanelbullar äts. Vi har samlat våra favoriter från Stockholms bästa bagerier.'},
      ],
      foodCategoryCards: [
        {imgSrc: 'https://caterbee.blob.core.windows.net/caterbee/home/featured/frukost-catering.jpg', title: 'FRUKOST'},
        {imgSrc: 'https://caterbee.blob.core.windows.net/caterbee/home/featured/lunch-catering.jpg', title: 'LUNCH'},
        {imgSrc: 'https://caterbee.blob.core.windows.net/caterbee/home/featured/fika-catering.jpg', title: 'FIKA'},
        {imgSrc: 'https://caterbee.blob.core.windows.net/caterbee/home/featured/plockmat-catering.jpg', title: 'PLOCKMAT'},
      ]
    }),
  });
</script>
