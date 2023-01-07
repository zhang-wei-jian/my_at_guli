import Vue from 'vue';
import App from './App.vue';
import router from '@/router'; //引入router
import store from '@/store';
import TypeNav from '@/components/TypeNav';
import Pagination from '@/components/Pagination';
import '@/mock/mockServer'
import * as api from '@/api'
import {Button} from 'element-ui'

Vue.config.productionTip = false;
Vue.component('TypeNav',TypeNav)  //这是导航栏三级
Vue.component('Pagination',Pagination)//这是分液器
Vue.component(Button.name, Button);

new Vue({
  router,
  store,
  beforeCreate(){
    // Vue.prototype.$bus = this
    Vue.prototype.$bus=this;
    Vue.prototype.$api=api
  },

  render: (h) => h(App),
}).$mount('#app');
