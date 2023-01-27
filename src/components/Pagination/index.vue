<template>
  <div class="pagination">
   
    <button :disabled="pageNo === 1">上一页</button>
    <button v-show="startEnt.start > 1" @click="$emit('searchOfPageNo',1)">1</button>
    <button v-show="startEnt.start >= 2">···</button>

    <button v-for="item in startEnt.end-startEnt.start+1"
     :key="item"
    :class="{active: pageNo===item+startEnt.start-1}"
    @click="$emit('searchOfPageNo',item + startEnt.start - 1 )"
    >
   
      {{ item + startEnt.start - 1 }}
    </button>

    <button v-show="startEnt.end<totalPage-1">···</button>
    <button v-show="startEnt.end <totalPage" @click="$emit('searchOfPageNo',totalPage)">{{ totalPage }}</button>
    <button>下一页</button>
    {{ startEnt.ent }}

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>


<script>
export default {
  name: "Pagination",
  props: ["total", "continues", "pageNo", "pageSize"],
  computed: {
    //总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnt() {
      let { pageNo, continues, totalPage } = this;
      let start;
      let end;
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        //正常页数就是当前页的前后一半
        start = pageNo - Math.floor(continues / 2);
        end = pageNo + Math.floor(continues / 2);
        //左侧超出
        if (start < 1) {
          start = 1;
          end = continues;
        }
        //右侧超出
        if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
        return { start, end };
      
      }
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
