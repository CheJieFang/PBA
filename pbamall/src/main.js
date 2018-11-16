// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import '../static/css/font-awesome.css'
//请求拦截
Axios.interceptors.response.use(function (response) {
    return response.data;
 }, function (error) {
    return Promise.reject(error);
  });
Vue.prototype.$axios=Axios 
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
