<template>
  <div>
    <h1>Hello world</h1>
    <h2>sds</h2>
    <h1>{{title}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      title: "Welcome to ambrosia"
    };
  }
});
</script>

<style scoped>
</style>