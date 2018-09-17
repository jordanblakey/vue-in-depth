import Vue from 'vue'

// Vue configuration
Vue.config.productionTip = false;

// Globally import all base components
import utils from './utils'
utils.baseImport()

// Imported local Components
import App from './App'

new Vue({
  el: '#app',
  components: {
    App
  },
  render: h => h(App)
})
