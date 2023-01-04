import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import user from './modules/user';
import search from './modules/search';
import detail from './modules/detail';
import ShopCart from './modules/ShopCart';

Vue.use(Vuex);
const state = {};
//state有模块对象其他都没有
const mutations = {};
const actions = {};
const getters = {};
const modules = {
  // 属性名是模块对象的名字
  home,
  user,
  search,
  detail,
  ShopCart,
};

export default new Vuex.Store({
  state: state,
  mutations,
  actions,
  getters,
  modules,
});
