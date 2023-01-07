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
    console.log('表示我有token啊');
    
    //用户登录了
    if (to.path === '/login') next('/');//登录了就不能跳转再去登录页面
    if (userInfo) {
      next();
    } else {
      //没有Name数据
      try {
        await store.dispatch('getUserInfo');
      } catch (error) {
        localStorage.removeItem('token');
        next('/login');
        console.log(error,'token过期我已经帮你自动跳转');//token清掉了不应该走这里
        
        // alert(error + '请重新登录,因为token过期');
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
