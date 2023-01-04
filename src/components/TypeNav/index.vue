<template>
  <div class="type-nav">
    <div class="container">
      <div class="nav-left" @mouseenter="sort = true" @mouseleave="isShow">
        <h2 class="all">全部商品分类</h2>
        <div class="sort" v-if="sort">
          <div class="all-sort-list2" @click="goSearch">
            <div
              :class="{ item_on: active === index }"
              v-for="(item, index) in categoryList"
              @mouseenter="moveIn(index)"
              @mouseleave="active = -1"
              :key="item.categoryId"
              class="item"
            >
              <h3>
                <!-- link會生成很多對象實例影响性能占据很多堆内存
                    用编程导航又会有很多回调函数，占据很多堆内存
                -->
                <a
                  :data-categoryName="item.categoryName"
                  :data-category1Id="item.categoryId"
                  >{{ item.categoryName }}</a
                >
                <!-- <RouterLink :to="{
                                name:'search',
                                query:{catgoryName:item.categoryName,categoryId:item.categoryId}
                            }">{{item.categoryName}}</RouterLink> -->

                <!-- <a
                  @click="
                    $router.push({
                      name: 'search',
                      query: {
                        catgoryName: item.categoryName,
                        categoryId: item.categoryId,
                      },
                    })
                  "
                >
                  {{ item.categoryName }}</a
                > -->
              </h3>
              <div class="item-list clearfix">
                <div
                  v-for="ls2 in item.categoryChild"
                  :key="ls2.categoryId"
                  class="subitem"
                >
                  <dl class="fore">
                    <dt>
                      <!-- <a
                        @click="
                          $router.push({
                            name: 'search',
                           query:{
                            catgoryName: ls2.categoryName,
                            categoryId: ls2.categoryId,
                           }
                          })
                        "
                        >{{ ls2.categoryName }}</a
                      > -->

                      <!-- <RouterLink :to="{
                                            name:'search',
                                            query:{catgoryName:ls2.categoryName,categoryId:ls2.categoryId}
                                        }">{{ ls2.categoryName }}</RouterLink> -->
                      <!-- <a>{{ ls2.categoryName }}</a> -->
                      <a
                        :data-categoryName="ls2.categoryName"
                        :data-category2Id="ls2.categoryId"
                        >{{ ls2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="ls3 in ls2.categoryChild"
                        :key="ls3.categoryChild"
                      >
                        <a
                          :data-categoryName="ls3.categoryName"
                          :data-category3Id="ls3.categoryId"
                          >{{ ls3.categoryName }}</a
                        >

                        <!-- <a>{{ ls3.categoryName }}</a> -->
                        <!-- <RouterLink
                          :to="{
                            name: 'search',
                            query: {
                              catgoryName: ls3.categoryName,
                              categoryId: ls3.categoryId,
                            },
                          }"
                          >{{ ls3.categoryName }}</RouterLink
                        > -->
                        <!-- <a
                          @click="
                            $router.push({
                              name: 'search',
                              query: {
                                catgoryName: ls3.categoryName,
                                categoryId: ls3.categoryId,
                              },
                            })
                          "
                          >{{ ls3.categoryName }}</a
                        > -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";
import { RouterLink } from "vue-router";
export default {
  name: "TypeNav",
  data() {
    return {
      active: -1,
      sort: true,
    };
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.catgoryList,
    }),
  },
  methods: {
    //节流的触发高亮
    moveIn: _.throttle(
      function (index) {
        // console.log(index);
        this.active = index;
      },
      80,
      { trailing: false }
    ),
    // handle(index) {
    //   console.log(index);
    //   this.active = index;
    // },
    goSearch(e) {
      // console.log(e.target.dataset);

      //判断点的是不是a标签
      if (!e.target.nodeName === "A") return;
      let { category1id, category2id, category3id, categoryname } =
        e.target.dataset;
    //   let thisId = category1id || category2id || category3id;
      if (categoryname) {
        let location = {
          name: "search",
          query: {
            // categoryId: thisId,
            categoryName: categoryname,
            category1Id: category1id,
            category2Id: category2id,
            category3Id: category3id,
            categoryName: categoryname,
          },
        };
        this.$router.push(location);
      }
      //   console.log("zhixingl ", thisId);
    },
    isShow() {
      if (this.$route.path != "/home") {
        console.log("zhixingl");

        this.sort = false;
      }
    },
  },
  mounted() {
    //Typenav的数据请求列表
    this.$store.dispatch("getCategoryList");
    if (this.$route.path != "/home") this.sort = false;
    console.log(this.$route.path);
  },
  components: { RouterLink },
};
</script>
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          &.item_on {
            background-color: pink;
          }
          //    &:hover{
          //        background-color: pink;
          // }
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
