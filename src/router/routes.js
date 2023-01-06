import Home from '@/view/Home';
import Login from '@/view/Login';
import Register from '@/view/Register';
import Search from '@/view/Search';
import Test from '@/view/Test';
import Detail from '@/view/Detail';
import ShopCart from '@/view/ShopCart';
import AddCartSuccess from '@/view/AddCartSuccess';
import Trade from '@/view/Trade';
import Pay from '@/view/Pay';
export default [
  {
    path: '',
    redirect: '/home',
  },

  {
    path: '/Test',
    component: Test,
  },

  {
    path: '/home',
    component: Home,
    children: [],
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHidden: true,
    },
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isHidden: true,
    },
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: Search,
    // props(route) {
    //   return {
    //     keyword: route.params.keyword,
    //     keyword1: route.query.keyword1,
    //   };
    // },
    props: (route) => ({ ...route.params, ...route.query }),
  },
  {
    path: '/detail/:skuid',
    component: Detail,
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
  },
  {
    path: '/shopcart',
    component: ShopCart,
  },
  {
    path: '/trade',
    component: Trade,
  },
  {
    path: '/pay/:orderId?',
    component: Pay,
  },

];
