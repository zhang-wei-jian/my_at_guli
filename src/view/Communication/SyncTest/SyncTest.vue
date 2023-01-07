<template>
  <div>
    小明的爸爸现在有{{money}}元
    
    <h2>不使用sync修改符</h2>
 <child :money="money"  @update:money="money =$event" ></child>
 <!-- 通过props拿到父组件传的数据 -->
<!-- 子组件接收props并且使用 -->
<!-- 给子组件写自定义事件，触发要做的是接收来的$event赋值给数据 -->
<!-- 子组件在核实的实际触发父组件的自定义事件，传值 -->
<!-- 父组件拿到子组件传递的值进行更新 -->


    <h2>使用sync修改符</h2>
    <child :money.sync="money"></child>
    <h2>使用v-model修改符</h2>
    <child2 v-model="money" ></child2>
    <hr>
  </div>
</template>

<script type="text/ecmascript-6">
  import Child from './Child.vue'
  import Child2 from './Child2.vue'
  export default {
    name: 'SyncTest',
    data(){
      return {
        money:1000
      }
    },
    components: {
      Child,
      Child2
    }
  }
</script>
