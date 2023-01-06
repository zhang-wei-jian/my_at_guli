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

//添加到购物车的
export const reqAddShopcart=(skuId,skuNum)=>ajax({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'})
//登录的
export const reqLogin = (paramsObj)=>ajax({url:'/user/passport/login',method:'post',data:paramsObj})
//根据token获取用户信息
export const reqUseInfo=()=>ajax({url:'/user/passport/auth/getUserInfo',method:'get'})
//退出登录
export const reqQuit=()=>ajax({url:'/user/passport/logout'})
//获取购物车列表
export const reqCartList=()=>ajax({url:'/cart/cartList'})
//妒忌商品数量进行修改
export const reqAddCart=(skuId,skuNum)=>ajax({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'})
//修改购物车的选中状态
export const reqCheckedCart=(skuId,isChecked)=>ajax({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
//批量修改购物车选中状态0/1
export const reqBatchChecked=(isChecked,skuIdList)=>ajax({url:`/cart/batchCheckCart/${isChecked}`,method:'post',data:skuIdList  })
//请求收获人信息
export const reqTrade=()=>ajax({url:`/order/auth/trade`  })
//获取订单列表
export const reqSubmitTrade=(tradeNo,orderInfo)=>ajax({url:`/order/auth/submitOrder?tradeNo=${tradeNo}` ,data:orderInfo ,method:'post'})
//订单支付
export const reqPay=(orderId)=>ajax({url:`/payment/weixin/createNative/${orderId}` })
//服了