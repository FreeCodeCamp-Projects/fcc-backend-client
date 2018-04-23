<template>
  <div class='grid-container'>
    <panel v-for='(item, index) in items' :key='index' :title='item.name'><router-link :to="item.link">{{item.link}}</router-link></panel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      items: [
        { name: 'URL Shortener', link: 'shorten' },
        { name: 'Request Header Parser', link: 'parser' },
        { name: 'Timestamp', link: 'timestamp' },
        { name: 'Item 4', link: '/item4' }
      ]
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.grid-container {
  display: grid;
  grid-template-rows: 300px 300px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
</style>
