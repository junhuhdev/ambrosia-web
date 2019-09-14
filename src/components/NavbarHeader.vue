<template>
  <div>
    <v-app-bar app dense color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="mr-5">
        <v-toolbar-title>
          <router-link to="/" class="toolbar-title">Cater You</router-link>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="item in items" :key="item.title" :to="item.link">{{item.title}}</v-btn>
      </v-toolbar-items>
      <CartMenu></CartMenu>
<!--      <v-dialog v-model="dialog" width="600px">-->
<!--        <template v-slot:activator="{ on }">-->
<!--          <v-toolbar-items>-->
<!--            <v-btn text icon v-on="on">-->
<!--              <v-icon>mdi-cart</v-icon>-->
<!--            </v-btn>-->
<!--          </v-toolbar-items>-->
<!--        </template>-->
<!--        <v-card>-->
<!--          <v-card-title>-->
<!--            <span class="headline">Use Google's location service?</span>-->
<!--          </v-card-title>-->
<!--          <v-card-text>-->
<!--            Lasdsad-->
<!--          </v-card-text>-->
<!--          <v-card-actions>-->
<!--            <div class="flex-grow-1"></div>-->
<!--            <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>-->
<!--            <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>-->
<!--          </v-card-actions>-->
<!--        </v-card>-->
<!--      </v-dialog>-->
    </v-app-bar>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import CartMenu from '@/components/carts/CartMenu.vue';

  export default Vue.extend({
    components: {
      CartMenu
    },

    data: () => ({
      drawer: null,
      items: [
        {title: 'Vårt urval', link: '/meal'},
        {title: 'Beställ catering', link: '/restaurant'},
        {title: 'Bli leverantör', link: '/catering'},
        {title: 'Kontakta oss', link: '/catering'},
      ]
    })
  });
</script>
<style scoped>
  .toolbar-title {
    color: white;
    text-decoration: none;
  }
</style>
