import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'
import 'element-ui/lib/theme-default/index.css'

// 将 ElementUI 挂载到 Vue 上
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: function (createElement) {
    return createElement(App)
  }
})
