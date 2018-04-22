<template>
  <v-toolbar dark color="green">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
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
