<template>
  <v-container>
    <RestaurantDetailHeader
        v-bind:title="'Indian stories'"
        v-bind:description="'descrpition sadsada...'"
        v-bind:img="'https://static.wixstatic.com/media/cf86d4_0c72682fbedc4bf78384380ae2bb92b0~mv2_d_2128_1416_s_2.jpg/v1/fill/w_640,h_448,al_c,q_80,usm_0.66_1.00_0.01/cf86d4_0c72682fbedc4bf78384380ae2bb92b0~mv2_d_2128_1416_s_2.webp'"
    >
    </RestaurantDetailHeader>
    <v-row>
      <v-col v-for="item in items" :key="item.category" md="6">
        <v-card>
          <v-toolbar color="grey" dark>
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
                  <v-btn outlined>Beställ</v-btn>
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
  import RestaurantDetailDialog from '@/views/restaurant_v2/RestaurantDetailDialog.vue';

  export default Vue.extend({
    components: {
      RestaurantDetailHeader,
      RestaurantDetailDialog
    },

    data: function () {
      return {
        showDetailDialog: false,
        items: [
          {
            category: 'Frukost',
            foods: [
              {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/bythebakery-catering.jpg'},
              {title: '1', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/panini-catering.jpg'},
              {title: '2', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/thelins-catering.jpg'},
              {title: '3', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/pizza-isabellesmarket.jpg'},
              {title: '4', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/drmat-catering.jpg'},
              {title: '5', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/matsallskapet-catering.jpg'},
            ]
          },
          {
            category: 'Lunch',
            foods: [
              {title: '7', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/bythebakery-catering.jpg'},
              {title: '8', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/panini-catering.jpg'},
              {title: '9', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/thelins-catering.jpg'},
              {title: '11', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/pizza-isabellesmarket.jpg'},
              {title: '12', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/drmat-catering.jpg'},
              {title: '13', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/matsallskapet-catering.jpg'},
            ]
          },
          {
            category: 'Middag',
            foods: [
              {title: '14', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/bythebakery-catering.jpg'},
              {title: '15', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/panini-catering.jpg'},
              {title: '16', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/thelins-catering.jpg'},
              {title: '17', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/pizza-isabellesmarket.jpg'},
              {title: '18', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/drmat-catering.jpg'},
              {title: '22', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/matsallskapet-catering.jpg'},
            ]
          },

        ]
      };
    },


    methods: {}

  });
</script>
<style scoped>
</style>
