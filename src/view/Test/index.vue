<template>
    <div>
<h1>HEllo World</h1>
<router-link to="/communication">Go Communication</router-link>
      <router-view></router-view>
    </div>
 
  </template>
  
  <script>
  // import axios from 'axios'
  import ajax from '@/api/ajax.js'
  import { mapActions, mapMutations, mapState } from 'vuex';
  export default {
    name: '',

    methods:{
    
    }
  }
  </script>
  
  <style lang="less" scoped>
  body{
      background-color: pink;
  }
  </style>
  