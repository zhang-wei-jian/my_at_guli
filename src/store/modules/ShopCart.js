import {
  reqAddCart,
  reqAddShopcart,
  reqBatchChecked,
  reqCartList,
  reqCheckedCart,
} from '@/api';

export default {
  state: {
    cartInfoList: [],
  },
  mutations: {
    UPDATA_CARTLIST(state, data) {
      state.cartInfoList = data;
    },
  },
  actions: {
    async getAddShopcart({ commit }, sku) {
      const { skuId, skuNum } = sku;
      const res = await reqAddShopcart(skuId, skuNum);
      if (res.code === 200) {
        return 'ok';
      } else {
        return Promise.reject('加入购物车错误');
      }
    },
    async getCartList({ commit }) {
      const res = await reqCartList();
      // console.log(res.data);
      if (res.code === 200) {
        console.log(res);
        
       
        commit('UPDATA_CARTLIST', res.data[0].cartInfoList);
        return 'ok';
      } else {
        return Promise.reject('err请求购物车失败');
      }
      // console.log(res.data[0].cartInfoList);
    },
    //修改购物车数量
    async editShopCart({ commit }, data) {
      let { id, sum } = data;
      const res = await reqAddCart(id, sum);
      if (res.code === 200) {
        return 'ok';
      } else {
        return Promise.reject('err修改购物车数量失败');
      }
    },
    //修改购物车选中
    async editCheckedCart({ commit }, data) {
      let { skuId, isChecked } = data;
      const res = await reqCheckedCart(skuId, isChecked);
      if (res.code === 200) {
        return 'ok';
      } else {
        return Promise.reject('err修改购物车选中状态失败');
      }
    },
    async batchChecked({ commit }, { isChecked, skuIdList }) {
      // console.log(isChecked,skuIdList,'传递过来的');

      const res = await reqBatchChecked(isChecked, skuIdList);

      if (res.code === 200) {
        return 'ok';
      } else {
        return Promise.reject('请求出错的batch修改选中');
      }
    },
  },
  getters: {},
};
