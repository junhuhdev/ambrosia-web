<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="mr-5">
        <v-toolbar-title>
          <router-link to="/" class="toolbar-title">BioTrackify</router-link>
        </v-toolbar-title>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
 export default {
  data: () => ({
   drawer: null,
   items: [
    {title: 'Beställ catering', link: '/catering'},
    {title: 'Bli leverantör', link: '/catering'},
    {title: 'Kontakta oss', link: '/catering'},
    {title: 'Logga in', link: '/catering'},
   ]
  })
 };
</script>
<style scoped>
</style>
