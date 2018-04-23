import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Timestamp from './views/Timestamp.vue'
import ShortenUrl from './views/ShortenUrl.vue'
import HeaderParser from './views/HeaderParser.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/timestamp',
      name: 'timestamp',
      component: Timestamp
    },
    {
      path: '/shorten',
      name: 'urlShortener',
      component: ShortenUrl
    },
    {
      path: '/parser',
      name: 'headerParser',
      component: HeaderParser
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
