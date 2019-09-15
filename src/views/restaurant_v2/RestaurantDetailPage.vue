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
      <v-col md="8" offset-md="2">
        <v-card>
          <v-toolbar color="pink lighten-1" dark>
            <v-row align="center" justify="center">
              <v-toolbar-title class="text-center">Frukost</v-toolbar-title>
            </v-row>
          </v-toolbar>
          <v-list subheader>
            <v-list-item-group>
              <v-list-item v-for="item in items" :key="item.title">
                <v-list-item-avatar size="200" horizontal>
                  <v-img :src="item.img"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn-toggle class="btn-group-sm">
                    <v-btn x-small fab color="red" v-on:click="item.count -= 1">
                      <v-icon color="white">mdi-minus</v-icon>
                    </v-btn>
                    <v-btn x-small fab color="white" class="subtitle-2">{{item.count}}</v-btn>
                    <v-btn x-small fab color="red">
                      <v-icon color="white">mdi-plus</v-icon>
                    </v-btn>
                  </v-btn-toggle>
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
        {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/bythebakery-catering.jpg'},
        {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/panini-catering.jpg'},
        {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/thelins-catering.jpg'},
        {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/pizza-isabellesmarket.jpg'},
        {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/drmat-catering.jpg'},
        {title: 'Lunch Biff Rogan Josh', subtitle: 'Biff med färsk tomat, en blandning av pepparnejlikor, och rostade korianderfrön.', count: 0, price: 95.50, img: 'https://caterbee.blob.core.windows.net/caterbee/cf/350x233/matsallskapet-catering.jpg'},
      ]
    })

  });
</script>
<style scoped>
</style>
