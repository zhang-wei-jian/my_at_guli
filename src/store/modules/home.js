import { reqCategoryList,reqBannerList,reqFloorList } from '@/api/index';
export default {
  state: {
    catgoryList: [],
    bannerList: [],
    floorList: [],
  },
  mutations: {
    // 自己模块的小state
    UPDATE_CATEGORYLIST(state, res) {
      state.catgoryList = res;
    },
    UPDATE_BANNERLIST(state, bannerList) {
      state.bannerList = bannerList;
    },
    UPDATE_FLOORLIST(state, floorList) {
      state.floorList = floorList;
    },
  },
  actions: {
    // 请求三级列表
    async getCategoryList({ commit }) {
      const res = await reqCategoryList();
      // console.log(res);

      if (res.code === 200) {
        //截取下表0开始不包含15，0-14下标
        commit('UPDATE_CATEGORYLIST', res.data.slice(0, 15));
      }
    },
    // 请求轮播图
    async getBannerList({ commit }) {
      const res = await reqBannerList();
      if (res.code === 200) {
        commit('UPDATE_BANNERLIST', res.data);
      }
    },
    // 获取楼层数据
    async getFloorList({ commit }) {
      const res = await reqFloorList();
      if (res.code === 200) {
        commit('UPDATE_FLOORLIST', res.data);
      }
    },
  },
  getters: {},
};
