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
import PaySuccess from '@/view/PaySuccess';
export default [
  {
    path: '',
    redirect: '/home',
  },

  {
    path: '/Test',
    component: Test,
    children: [
      {
        path: '/communication',
        component: () => import('@/view/Communication/Communication'),
        children: [
          {
            path: 'pubsub',
            component: () =>
              import('@/view/Communication/PubsubTest/PubsubTest'),
            meta: {
              isHideFooter: true,
            },
          },
          {
            path: 'event',
            component: () => import('@/view/Communication/EventTest/EventTest'),
            meta: {
              isHideFooter: true,
            },
          },
          {
            path: 'model',
            component: () => import('@/view/Communication/ModelTest/ModelTest'),
            meta: {
              isHideFooter: true,
            },
          },
          {
            path: 'sync',
            component: () => import('@/view/Communication/SyncTest/SyncTest'),
            meta: {
              isHideFooter: true,
            },
          },
          {
            path: 'attrs-listeners',
            component: () =>
              import(
                '@/view/Communication/AttrsListenersTest/AttrsListenersTest'
              ),
            meta: {
              isHideFooter: true,
            },
          },
          {
            path: 'children-parent',
            component: () =>
              import(
                '@/view/Communication/ChildrenParentTest/ChildrenParentTest'
              ),
            meta: {
              isHideFooter: true,
            },
          },
          {
            path: 'scope-slot',
            component: () =>
              import('@/view/Communication/ScopeSlotTest/ScopeSlotTest'),
            meta: {
              isHideFooter: true,
            },
          },
        ],
      },
    ],
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
  {
    // name: 'paysuccess',
    path: '/paysuccess',
    // component: () => import('@/view/PaySuccess'),
    component:PaySuccess
  },
  {
    path: '/center',
   component: () => import('@/view/Center'),
  },
];
