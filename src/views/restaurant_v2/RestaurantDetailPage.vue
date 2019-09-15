<template>
  <v-container>
    <RestaurantDetailHeader/>
    <v-row>
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
                  <v-list-item-action-text v-text="food.price + ' kr'" class="subtitle-1 black--text"></v-list-item-action-text>
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
  import RestaurantDetailHeader from '@/views/restaurant_v2/RestaurantDetailHeader.vue';

  export default Vue.extend({
    components: {
      RestaurantDetailHeader
    },

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
