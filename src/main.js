import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

import App from './App.vue'
import router from './router'

import Panel from '@/components/Panel'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: colors.green.darken1, // #E53935
    secondary: colors.green.lighten3, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})

Vue.component('panel', Panel)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
