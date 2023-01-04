import { reqAddShopcart } from "@/api";

export default {
    state: {
      name:'user'
    },
    mutations: {
     
    
    },
    actions: {
        async getAddShopcart({commit},sku){
            const {skuId,skuNum} = sku
            const res=await reqAddShopcart(skuId,skuNum)
            // console.log(res);
            
            if(res.code===200){
              return 'ok'
            }else{
              return Promise.reject('加入购物车错误')
            }
          
           }
    },
    getters: {
    
    },
  };
  