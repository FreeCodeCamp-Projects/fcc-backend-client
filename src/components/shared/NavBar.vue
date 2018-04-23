<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <router-link :to="{name: 'home'}"><v-toolbar-title class="white--text" >{{title}}</v-toolbar-title></router-link>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: String
  }
}
</script>

<style scoped>

</style>
