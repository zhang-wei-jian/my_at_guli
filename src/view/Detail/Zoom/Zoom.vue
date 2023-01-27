<template>
  <div class="spec-preview">
    <!-- <img src="../images/s1.png" /> -->
    <!-- <img :src="skuImageList[0].imgUrl" /> -->
    <img :src="defaultImg.imgUrl" />

    <div class="event" @mousemove="move"></div>
    <div class="big">
      <img :src="defaultImg.imgUrl" ref="bigImg"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'Zoom',
  data() {
    return {
      defaultIndex: 1,
    };
  },
  props: ['skuImageList'],
  mounted() {
    this.$bus.$on('sendIndex', this.sendIndex);
  },
  methods: {
    sendIndex(index) {
      this.defaultIndex = index;
    },
    move(e){
      let mask = this.$refs.mask  //拿到蒙版
      let bigImg = this.$refs.bigImg
      let mouseX = e.offsetX;  //小图的鼠标位置
      let mouseY = e.offsetY;
     let  moveX = mouseX - mask.offsetWidth/2   //蒙版的位置
      let moveY = mouseY - mask.offsetHeight/2
      if(moveX<0){
        moveX  = 0
      }else if(moveX> e.target.offsetWidth - mask.offsetWidth){
        moveX =  e.target.offsetWidth - mask.offsetWidth
      }
       if(moveY<0){
        moveY  = 0
      }else if(moveY> e.target.offsetHeight - mask.offsetHeight){
        moveY =  e.target.offsetHeight - mask.offsetHeight
      }
      mask.style.left  = moveX+'px'
      mask.style.top  = moveY+'px'//蒙版最终位置
      //大图的位置
      bigImg.style.left = moveX*-2 + 'px'
      bigImg.style.top = moveY*-2 + 'px'
      
     
      
    }
  },
  computed: {
    defaultImg() {
      return this.skuImageList[this.defaultIndex] || {};
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
