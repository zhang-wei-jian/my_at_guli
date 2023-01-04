<template>
  <div>
    <Header></Header>
<router-view></router-view>
    <!-- <Footer v-if="isHidden"></Footer> -->
    <Footer v-if="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  mounted(){
    // console.log(this.$route);
    
  },
  // computed(){
   
  // }
}
</script>

<style lang="less" scoped>

</style>
