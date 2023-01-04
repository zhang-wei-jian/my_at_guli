import Vue from 'vue';
import App from './App.vue';
import router from '@/router'; //引入router
import store from '@/store';
import TypeNav from '@/components/TypeNav';
import Pagination from '@/components/Pagination';
import '@/mock/mockServer'
Vue.config.productionTip = false;
Vue.component('TypeNav',TypeNav)  //这是导航栏三级
Vue.component('Pagination',Pagination)//这是分液器
new Vue({
  router,
  store,
  beforeCreate(){
    // Vue.prototype.$bus = this
    Vue.prototype.$bus=this
  },

  render: (h) => h(App),
}).$mount('#app');
