import {  reqSearchGoods } from '@/api/index';
export default {
  state: {
    goodsInfo: [],
  },
  mutations: {
    // 自己模块的小state
    UPDATE_GOODSINFO(state, goodsInfo) {
      state.goodsInfo = goodsInfo;
    },
  },
  actions: {
    async getGoodsInfo({ commit }, searchParmas) {
      const res = await reqSearchGoods(searchParmas);
      if (res.code === 200) {
        commit('UPDATE_GOODSINFO', res.data);
      }
    },
 
  },
  getters: {
    goodsList(state) {
      //  || [] 防止组件中使用到的数据是undefined  undefined再去.属性或者[]下标报错
      return state.goodsInfo.goodsList || [];
    },
    attrsList(state) {
      return state.goodsInfo.attrsList || [];
    },
    trademarkList(state) {
      return state.goodsInfo.trademarkList || [];
    },
    
  },
};
