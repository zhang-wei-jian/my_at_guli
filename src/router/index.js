import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '@/store';
// import TypeNav from '@/components/TypeNav';
Vue.use(VueRouter);
let newPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (localtion, resolve, reject) {
  if (resolve === undefined && reject === undefined) {
    // newPush(localhost);
    return newPush.call(this, localtion).catch(() => {});
    // console.log(this);
  } else {
    return newPush.call(this, localtion, resolve, reject);
  }
};
const router = new VueRouter({
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 };
    // return { top: 0 }
  },
});
router.beforeEach(async (to, from, next) => {
  const token = store.state.user.token;
  const userInfo = store.state.user.userInfo.name;
  // console.log(token, userInfo, '有token');

  if (token) {
    //用户登录了
    if (to.path === '/login') next('/');
    if (userInfo) {
      next();
    } else {
      //没有Name数据
      try {
        await store.dispatch('getUserInfo');
      } catch (error) {
        localStorage.removeItem('token');
        next('login');
        alert(error + '请重新登录,因为token过期');
      }
      next();
    }
  } else {
    //不能去购物车订单列表
    next();
  }

  // console.log('最后跳转了');

  // next();
});
export default router;
