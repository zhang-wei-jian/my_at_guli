import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/Home';
import Login from '@/view/Login';
import Register from '@/view/Register';
import Search from '@/view/Search';
Vue.use(VueRouter);
let newPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (localhost, resove, reject) {
  if (!resove && !reject) {
    // newPush(localhost);
    newPush.call(this, localhost).catch(() => {});
    // console.log(this);
  }
};
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      name: 'search',
      path: '/search/:keyword?',
      component: Search,
    },
  ],
});
