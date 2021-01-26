<template>
  <v-app class="app">
    <router-view :key="$route.path"/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  mounted () {
    // this.$vuetify.theme.dark = true
  }
}
</script>

<style
    lang="scss"
>
@import "src/base";
.row, .col {
  padding: 0;
  margin: 0;
}
.app {
  //background: $primaryGreen;
}
</style>
