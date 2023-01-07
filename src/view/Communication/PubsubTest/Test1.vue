<template>
  <div>
    <h1>Test1组件</h1>
    <p>接收Test2传递的数据:
      <span v-show="!content">???</span>
      <span v-show="content">{{content}}</span>
    </p>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: 'Test1',
  data(){
    return {
      content:''
    }
  },
  methods:{
       test(msgName,msg){
      this.content = msg
    }
  },
  mounted(){
    PubSub.subscribe('test',(data)=>{
      this.content = data
      
    })
  }
}
</script>

<style scoped>

</style>
