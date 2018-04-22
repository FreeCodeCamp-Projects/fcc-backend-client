<template>
  <div class='grid-container'>
    <panel v-for='(item, index) in items' :key='index' :title='item.name'></panel>
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
        { name: 'Item 1', link: '/item1' },
        { name: 'Item 2', link: '/item2' },
        { name: 'Item 3', link: '/item3' },
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
