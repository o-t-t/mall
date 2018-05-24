// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import {currency} from './util/currency.js'   //有{}的原因，是因为currency导出的是具名的函数，所以必须要通过 object对象结构来接收
//import VueInfiniteScroll from 'vue-infinite-scroll'
Vue.use(Vuex);
Vue.use(VueLazyload,{
  loading: 'static/loading-svg/loading-bars.svg',
  attempt: 3
});
Vue.filter("currency",currency);   //定义一个全局过滤器（过滤器名“currency”；值currency）
//Vue.use(VueInfiniteScroll);
Vue.config.productionTip = false
const store = new Vuex.Store({
   state: {
     cartCount: 0
   },
   mutations: {
     //更新购物车数量信息
     updateCartCount(state,cartCount){
       state.cartCount += cartCount;
     },
     //初始化购物车信息
     initCartCount(state,cartCount){
       state.cartCount = cartCount
     }
   }
 });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

//main.js是整个vue工程的入口
