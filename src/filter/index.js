import Vue from 'vue';
import moment from 'moment';
Vue.filter('data1',function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

