// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BModal from 'bootstrap-vue/es/components/modal/modal'
import BModalDirective from 'bootstrap-vue/es/directives/modal/modal'
import BootstrapVue from 'bootstrap-vue'

import Vue from 'vue'
import App from './App'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faJs, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee, faJs, faVuejs)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('my-component', {
  components: {
    'b-modal': BModal
  },
  directives: {
    'b-modal': BModalDirective
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
