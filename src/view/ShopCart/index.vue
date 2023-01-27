<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul v-for="item in cartInfoList" :key="item.id" class="cart-list">
          <li class="cart-list-con1">
            <input
              @click="editCheck(item)"
              type="checkbox"
              :checked="item.isChecked"
              name="chk_list"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="item.imgUrl" />
            <div class="item-msg">{{ item.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ item.skuPrice }}.00</span>
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:void(0)"
              @click="changeSum('sum', -1, item)"
              class="mins"
              >-</a
            >
            <input
              autocomplete="off"
              @change="changeSum('input', Number($event.target.value), item)"
              type="text"
              :value="item.skuNum"
              minnum="1"
              class="itxt"
            />
            <a
              href="javascript:void(0)"
              @click="changeSum('add', +1, item)"
              class="plus"
              >+</a
            >
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ item.skuPrice * item.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet">删除</a>
            <br />
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <!-- <input @click="batchChecked" class="chooseAll" type="checkbox" /> -->
        <input v-model="chooseAll" class="chooseAll" type="checkbox" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ checkedSum }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ priceSum }}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" to="/trade" >结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShopCart",
  computed: {
    ...mapState({
      cartInfoList: (state) => state.ShopCart.cartInfoList ,
    }),
    //总选中数量
    checkedSum() {
      let sum = 0;
      this.cartInfoList.forEach((item) => {
        if (item.isChecked) sum += 1;
      });
      return sum;
    },
    //总选中价格
    priceSum() {
      return this.cartInfoList.reduce((prev, item) => {
        if (item.isChecked) {
          prev += item.skuPrice * item.skuNum;
        }
        return prev;
      }, 0);
    },
    //全选状态
    chooseAll: {
      get() {
        const sb = this.cartInfoList.every((item) => {
          if (item.isChecked) {
            return true;
          } else {
            return false;
          }
        });

        return sb;
      },
   async   set(newVal) {
        let arr = [];
       this.cartInfoList.forEach((item) => {
          if (item.isChecked != newVal) {
            console.log(item);
            
            // arr.push(item.skuId) 
            arr.push(item.skuId) 
          }
        });
        console.log(arr,'arr');

        // console.log(sb);

        // console.log(this.cartInfoList.some(item=>item.isChecked));

        //   this.$store.dispatch("batchChecked", {
        //   idList: arr,
        //   isChecked: newVal ? 1 : 0,
        // });
       await this.$store.dispatch("batchChecked", {
          isChecked: newVal? 1 :0,
          skuIdList: arr,
        });
      
        
        this.getCartList()
    
        
      },
    },
  },
  mounted() {
    this.getCartList();
    // console.log(this.cartInfoList);
  },
  methods: {
    //获取列表
    getCartList() {
      this.$store.dispatch("getCartList");
    },
    //修改数量
    async changeSum(flag, disNum, item) {
      //disNum 是最新的值
      //item是这个数组的数
      //我们要做的是计算出要发送给后端告诉他加多少减多少
      if (flag === "add") {
      } else if (flag === "sum") {
        if (item.skuNum <= 1) return;
      } else if (flag === "input") {
        disNum = disNum < 1 ? 0 : disNum - item.skuNum;
      }
      try {
        // console.log(disNum,'这是最后修改的数量');
        await this.$store.dispatch("editShopCart", {
          id: item.skuId,
          sum: disNum,
        });
       

        this.getCartList();
      } catch (error) {
        alert("修改购物车数量失败");
      }
    },
    //修改选中
    async editCheck(item) {
      // console.log(typeof item.isChecked);
      console.log(item.skuId);

      await this.$store.dispatch("editCheckedCart", {
        skuId: item.skuId,
        isChecked: item.isChecked === 0 ? 1 : 0,
      });
      this.getCartList();
    },
    //批量选中
    // batchChecked(e) {
    //   let arr = this.cartInfoList.map((item) => item.skuId);
    //   this.$store.dispatch("batchChecked", {
    //     idList: arr,
    //     isChecked: e.target.checked ? 1 : 0,
    //   });
    // },
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;
  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }
  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;
      & > div {
        float: left;
      }
      .cart-th1 {
        width: 25%;
        input {
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
      .cart-th2 {
        width: 25%;
      }
      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }
    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;
      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        & > li {
          float: left;
        }
        .cart-list-con1 {
          width: 15%;
        }
        .cart-list-con2 {
          width: 35%;
          img {
            width: 82px;
            height: 82px;
            float: left;
          }
          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }
        .cart-list-con4 {
          width: 10%;
        }
        .cart-list-con5 {
          width: 17%;
          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
            text-decoration: none;
          }
          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 31px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
            text-decoration: none;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }
  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;
        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
          text-decoration: none;
          &hover {
            color: white !important;
          }
        }
      }
    }
  }
}
</style>