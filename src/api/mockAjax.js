//专门用来对ajax进行封装 的
//最要是实现的效果
import axios from 'axios'
import nProgress from 'nprogress';
import  'nprogress/nprogress.css'//加载特效
//配置基础属性和超时限制
//添加进度条信息
//返回的响应式不在需要从data属性当中拿数据，而是响应式就是我们的数据
// 统一处理请求错误
const mockAjax = axios.create({//创建一个axios实例
    baseURL: '/mock',//基础路径
    timeout: 1000,//超时时间
  
  });

  // 添加请求拦截器
  mockAjax.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么(config请求相关信息，请求报文)
    nProgress.start()
    
    return config;
  });

// 添加响应拦截器
mockAjax.interceptors.response.use(function (response) {
    // 响应成功执行的
    nProgress.done()
    return response.data;
  }, function (error) {
    // 失败执行的
    if(error.response.status===401)alert('未授权')
    if(error.response.status===403)alert('禁止访问')
    if(error.response.status===404)alert('错误访问')
    if(error.response.status===5000)alert('服务器出错')
    return Promise.reject(error);
  });

  export default mockAjax