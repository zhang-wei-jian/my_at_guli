import {reqAddShopcart, reqGoodsDetail} from '@/api/index'
export default {
    state: {
      gooodsDetail:[]

    },
    mutations: {
      // 自己模块的小state
      UPDATE_GOOSDETAIL(state,data){
        state.gooodsDetail=data
      }
    },
    actions: {
        async getGoodsDetail({commit},id){
            const res = await reqGoodsDetail(id)
            if(res.code===200){
                commit('UPDATE_GOOSDETAIL',res.data)
            }
            },
           
    },
    getters: {
        // ...mapGetters(['categoryView', 'skuInfo', 'spuSaleAttrList']),
        categoryView(state){
            return state.gooodsDetail.categoryView || {}
        },
        skuInfo(state){
            return state.gooodsDetail.skuInfo || {}
        },
        spuSaleAttrList(state){
            return state.gooodsDetail.spuSaleAttrList ||[]
        }
    },
  };
  