<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"></Floor>

    <Brand></Brand>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TypeNav from "@/components/TypeNav";

import ListContainer from "@/view/Home/listContainer";
import Recommend from "@/view/Home/Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
export default {
  name: "Home",
  components: {
    TypeNav,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
 

  
  },
  mounted() {
    this.getFloorList();
    // this.getUserInfo();
  },
  methods: {
    getFloorList() { 
      this.$store.dispatch("getFloorList");
    },
 async  getUserInfo(){

  
       await this.$store.dispatch('getUserInfo')

        
     
    }
  },
};
</script>

<style lang="less" scoped>
</style>
