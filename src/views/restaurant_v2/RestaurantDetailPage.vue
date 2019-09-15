<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-parallax class="elevation-12" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
          <v-row align="center" justify="center">
            <h1 class="display-2 mb-4">Indian Stories</h1>
          </v-row>
        </v-parallax>
      </v-col>
      <v-col v-for="item in items" :key="item.category" md="6">
        <v-card>
          <v-toolbar color="pink lighten-1" dark>
            <v-row align="center" justify="center">
              <v-toolbar-title class="text-center">{{item.category}}</v-toolbar-title>
            </v-row>
          </v-toolbar>
          <v-list subheader>
            <v-list-item-group>
              <v-list-item v-for="food in item.foods" :key="food.title">
                <v-list-item-avatar size="200" horizontal>
                  <v-img :src="food.img"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="food.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="food.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data: () => ({
      items: [
        {
          category: 'Frukost',
          foods: [
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/bythebakery-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/panini-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/thelins-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/pizza-isabellesmarket.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/drmat-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/matsallskapet-catering.jpg'},
          ]
        },
        {
          category: 'Lunch',
          foods: [
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/bythebakery-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/panini-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/thelins-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/pizza-isabellesmarket.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/drmat-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/matsallskapet-catering.jpg'},
          ]
        },
        {
          category: 'Middag',
          foods: [
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/bythebakery-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/panini-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/thelins-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/pizza-isabellesmarket.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/drmat-catering.jpg'},
            {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/matsallskapet-catering.jpg'},
          ]
        },

      ]
    })

  });
</script>
<style scoped>
</style>
