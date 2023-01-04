const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: '127.0.0.1',
    proxy:{
      '/api': {
        target:'http://sph-h5-api.atguigu.cn',
      }
    }
  },
  lintOnSave: false,
});
