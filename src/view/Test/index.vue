<template>
    <div>
  <button @click="test">点击就进行测试</button>
  <button @click="test2">发送数据</button>
  <!-- <h3>总store的数据: {{ dsb }}</h3>
  <h3>home的数据：{{ $name }}</h3>
  <h3>home的数据：{{ homeName }}</h3>
  <h3>userstore的数据{{ $store.state.yonghu.name}}</h3>
  <h3>userstore的数据{{ yonghuName}}</h3>
  <h3>userstore的数据{{$store.getters.newA }}</h3>
  <h3>userstore的数据{{$store.getters.newB }}</h3>
  <button @click="fn1">点击触发home模块中的fn1，mutations</button>
  <button @click="fn2">点击触发user模块中的actions</button>
   -->
    </div>
  </template>
  
  <script>
  // import axios from 'axios'
  import ajax from '@/api/ajax.js'
  import { mapActions, mapMutations, mapState } from 'vuex';
  export default {
    name: '',
    computed:{
      ...mapState(['sum']),
      
      ...mapState({
          homeName:function(state){
              return state.zhuye.name
          },
          yonghuName:state=>state.yonghu.name
      }),
     
      ...mapState({
          dsb:'sum'
      })
    },
    methods:{
      test2(){
        // this.$store.dispatch('reqCategoryList')
        // this.$store.dispatch('fn1')
        this.$store.dispatch('getCategoryList')
      },
       
        ...mapMutations({
            fn1:'FN1',
            // fn2:'FN2'
        }),
        ...mapActions({
            fn2:'fn2'
        }),
    async  test(){
     const res = await ajax({
          url: '/product/getBaseCategoryList',
          method: 'get',
        })
  console.log(res.data);
  
  
  
  
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  body{
      background-color: pink;
  }
  </style>
  