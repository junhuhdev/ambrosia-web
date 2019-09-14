<template>
  <div class="text-center">
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
            text
            icon
            v-on="on"
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn rounded color="primary">
                Till varukorgen
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <CartMenuList></CartMenuList>
        <v-divider></v-divider>
        <v-btn block color="primary" dark>Till varukorgen</v-btn>
      </v-card>
    </v-menu>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import CartMenuList from '@/components/carts/CartMenuList.vue';

  export default Vue.extend({
    components: {
      CartMenuList
    },

    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
    }),

  });
</script>
<style scoped>
</style>
