import { reqLogin, reqQuit, reqUseInfo } from '@/api';
import { getToken, setToken } from '@/utils/userAbout';

export default {
  state: {
    name: '', //这数据不应该有用，用账号请求自带的
    userInfo: {},
    token: getToken(),
  },
  mutations: {
    // 自己模块的小state
    LOGIN_OVER(state, data) {
      let { name, token } = data;
      state.name = name;
      state.token = token;
      // localStorage.setItem('token', token);
      setToken(token);
    },
    USERINFO(state, userInfo) {
      state.userInfo = userInfo;
    },
    QUIT(state){//退出登录清空vueX数据
      state.userInfo={}
      state.token=getToken()
    }
  },
  actions: {
    //请求用户token的
    async goLogin({ commit }, paramsObj) {
      const res = await reqLogin(paramsObj);
      if ((res.code = 200)) {
        commit('LOGIN_OVER', res.data);
       
        return 'ok';
      } else {
        return Promise.reject('err登录请求token出错');
      }
    },
    //拿着token去请求用户信息的
    async getUserInfo({ commit }) {
      const res = await reqUseInfo();
   
      if (res.code === 200) {
        commit('USERINFO', res.data);
        return 'ok'
      }else{
        return Promise.reject('err获取userInfo错误')
      }
    },
   async quit({commit}){
    const res =    await reqQuit()
 
    commit('QUIT')
 
    }
  },
  getters: {},
};
