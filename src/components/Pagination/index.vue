<template>
  <div class="pagination">
    <button :disabled="pageNo === 1">上一页</button>
    <button v-show="pageNo > 1">1</button>
    <button v-show="pageNo >= 2">···</button>

    <button v-for="item in startEnt.end-startEnt.start+1" :key="item"
    :class="{active: item + startEnt.start - 1===pageNo}"
    @click="$emit('searchOfPageNo',item + startEnt.start - 1 )"
    >
      {{ item + startEnt.start - 1 }}
    </button>

    <button>···</button>
    <button>{{ totalPage }}</button>
    <button>下一页</button>

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
        start = pageNo - Math.floor(continues / 2);
        end = pageNo + Math.floor(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
        return { start, end };
        // return {start:5,end:5}
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
