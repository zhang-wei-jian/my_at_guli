<template>
  <div>
    <h2>自定义带Hover提示的按钮:而且我b事还很多要能自定义信息</h2>
    <el-button type="primary">主要按钮</el-button>
    <!-- <Child @click="()=>{}" style="color:red" class="cls1" a="a" b="b" @xxx="()=>{}"></Child> -->
    ////这是二次封装按钮
    <MyButton title="呵呵"></MyButton>
    <MyButton title="018B5A34.png"></MyButton>
  </div>
</template>

<script type="text/ecmascript-6">
import Child from './Child'
import MyButton from './MyButton.vue'
export default {
    name: 'AttrsListenersTest',
    components:{
      Child,
      MyButton,
    },
    methods: {
      
    },
  }
</script>
