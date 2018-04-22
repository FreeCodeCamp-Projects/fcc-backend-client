<template>
  <v-layout>
    <v-flex>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
