<template>
  <div>
    <h2>自定义带Hover提示的按钮:而且我b事还很多要能自定义信息</h2>
    <!-- <el-button type="primary">主要按钮</el-button> -->
    <!-- <Child @click="()=>{}" style="color:red" class="cls1" a="a" b="b" @xxx="()=>{}"></Child> -->
    ////这是二次封装按钮
    <!-- <MyButton title="呵呵"></MyButton> -->
    <!-- <MyButton title="呵呵"></MyButton> -->
  
    <!-- <el-button @click="test">elementUi</el-button> -->
    <!-- <MyButton title="018B5A34.png"></MyButton> -->
    <MyButton @click="test" type="danger" icon="el-icon-delete" title="删除按钮"></MyButton>
    <MyButton  @mouseenter="test" type="danger" title="你爹按钮" ></MyButton>
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
      test(){
        console.log('hah');
        
      }
    },
  }
</script>
