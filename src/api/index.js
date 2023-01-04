// import ajax from 'ajax'
import ajax from './ajax';
import mockjs from './mockAjax';
//这里同意管理咱们项目用到的接口

export const reqCategoryList = function () {
  // console.log('调用了发送请求');//请求三级分类列表数据
  return ajax({
    url: '/product/getBaseCategoryList',
    method: 'get',
  });
};
//请求轮播图
export const reqBannerList = ()=>mockjs({url:'banner'})
export const reqFloorList = ()=>mockjs({url:'floor'})

//请求搜索列表
export const reqSearchGoods =(searchParmas)=>ajax({url:'/list',method:'post',data:searchParmas})

export const reqGoodsDetail=(skuId)=>ajax({url:`/item/${ skuId }`})

export const reqAddShopcart=(skuId,skuNum)=>ajax({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'})

//登录的
export const reqLogin = (paramsObj)=>ajax({url:'/user/passport/login',method:'post',data:paramsObj})
//根据token获取用户信息
export const reqUseInfo=()=>ajax({url:'/user/passport/auth/getUserInfo',method:'get'})