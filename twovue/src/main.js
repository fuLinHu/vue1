// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
debugger
import $ from 'jquery'
import './assets/bootstrap-3.3.7/dist/css/bootstrap.min.css'
import './assets/bootstrap-3.3.7/dist/js/bootstrap.min.js'
import './assets/jquery-easyui-1.5.4/css/default/easyui.css'
import './assets/jquery-easyui-1.5.4/js/jquery.easyui.min.js'
import Vue from 'vue'
import App from './App'
import router from './router'

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
