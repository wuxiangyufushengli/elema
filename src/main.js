
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './mock/mockserver';
import Split from './components/Split/Split.vue';
import './filter'
Vue.component('Split',Split)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
