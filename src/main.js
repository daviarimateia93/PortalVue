// basic vue ecosystem
import Vue from 'vue'
import App from './App'
import router from './router'

// additional core libs
import moment from 'moment'
import Vuetify from 'vuetify'

// vuex store object
import { store } from './store/store'

moment.locale('pt-br')

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
