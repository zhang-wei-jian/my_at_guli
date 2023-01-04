// 1.进行下载 需要引入
import Mock from 'mockjs'
// 2.准备数据并引入
// json文件的内容默认会暴露
import banner from './banner.json'
import floor from './floor.json'
// 3.使用Mock搭建接口
// Mock.mock 参数1 请求的路径  参数2 返回的结果
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})
// 4.一定要记得在main.js引入这个文件 不然他不会执行
// 5.咱们之后发送模拟数据的接口 用mockAjax发送  发送真实数据的接口 用ajax
