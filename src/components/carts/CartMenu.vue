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
        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable hints</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn text @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" text @click="menu = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({

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
