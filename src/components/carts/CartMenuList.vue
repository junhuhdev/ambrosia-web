<template>
  <v-list>
    <v-list-item-group>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-avatar>
          <v-img :src="item.img"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="item.title"></v-list-item-title>
          <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          <v-btn-toggle class="btn-group-sm">
            <v-btn x-small fab color="red" v-on:click="item.count -= 1">
              <v-icon color="white">mdi-minus</v-icon>
            </v-btn>
            <v-btn x-small fab>{{item.count}}</v-btn>
            <v-btn x-small fab color="red" v-on:click="item.count += 1">
              <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-trash-can-outline</v-icon>
          <v-list-item-action-text v-text="item.price" class="subtitle-1 black--text"></v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data: () => ({
      toggle: null,
      items: [
        {
          img: 'https://d2rfo6yapuixuu.cloudfront.net/h4d/h03/9374221860894/2359715300003_1550505666334_master_axfood_300',
          title: 'Kyckling hel färsk',
          subtitle: 'GARANT, ca 1.3 kg',
          price: '39,00 kr',
          count: 1
        },
        {
          img: 'https://d2rfo6yapuixuu.cloudfront.net/h04/h23/9086779097118/07340083463143.jpg_1520719678758_master_axfood_300',
          title: 'Bacon skivat',
          subtitle: 'GARANT EKO, 120 g',
          price: '19,95 kr',
          count: 1
        },
        {
          img: 'https://d2rfo6yapuixuu.cloudfront.net/he1/h66/8881178214430/07350002402955.jpg_1480078266950_master_axfood_300',
          title: 'Kikärtor ekologiska',
          subtitle: 'ZETA, 120 g',
          price: '13,95 kr',
          count: 1
        }
      ]
    }),

    methods: {}

  });
</script>
<style scoped>
</style>
