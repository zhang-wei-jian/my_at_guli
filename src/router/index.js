import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
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
router.beforeEach((to, from, next) => {
  next();
});
export default router;
