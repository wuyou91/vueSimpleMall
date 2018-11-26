<template>
  <div id="category">
    <div class="sidebar">
      <ul>
        <li v-for="(item, index) in navData"
        :key="index"
        :class="{tab: index===isTab}"
        @click ="tab(index)"
        >{{item}}</li>
      </ul>
    </div>
    <div class="content">
        <img :src="list1.bannar">
        <div class="child-list" v-for="(item,index) of list1.prod" :key="index">
          <p>{{item.title}}</p>
          <ul>
              <li class="tab" v-for="(prd,i) of item.data" :key="i">
                <div>
                  <img :src="prd.img">
                  <p>{{prd.text}}</p>
                </div>
              </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      isTab: 0,
      navData: ['家用电器', '电脑办公', '美妆护肤', '个户清洁', '汽车用品', '图书音像', '男装', '男鞋', '女装', '女鞋', '母婴童装', '运动户外', '食品生鲜', '酒水饮料', '家具家装', '家居厨具', '箱包手袋', '钟表珠宝', '玩具乐器', '宠物生活', '礼品鲜花', '生活旅行', '艺术邮币', '二手商品', '国际品牌', '拍卖'],
      list1: {
        bannar: 'http://p9uwb0f4z.bkt.clouddn.com/banner02.jpg',
        prod: [
          {
            title: '热门品牌',
            data: [
              {
                text: '小米',
                img: './../../../static/images/categories/categories_001.JPG'
              },
              {
                text: '华为',
                img: './../../../static/images/categories/categories_002.JPG'
              },
              {
                text: '荣耀',
                img: './../../../static/images/categories/categories_003.JPG'
              },
              {
                text: 'iPhone',
                img: './../../../static/images/categories/categories_004.JPG'
              },
              {
                text: 'vivo',
                img: './../../../static/images/categories/categories_005.JPG'
              },
              {
                text: 'oppo',
                img: './../../../static/images/categories/categories_006.JPG'
              },
              {
                text: '魅族',
                img: './../../../static/images/categories/categories_007.JPG'
              },
              {
                text: '三星',
                img: './../../../static/images/categories/categories_008.JPG'
              },
              {
                text: '一加',
                img: './../../../static/images/categories/categories_009.JPG'
              },
              {
                text: '锤子',
                img: './../../../static/images/categories/categories_010.JPG'
              }
            ]
          },
          {
            title: '手机通讯',
            data: [
              {
                text: '小米',
                img: './../../../static/images/categories/categories_011.JPG'
              },
              {
                text: '华为',
                img: './../../../static/images/categories/categories_012.JPG'
              },
              {
                text: '荣耀',
                img: './../../../static/images/categories/categories_013.JPG'
              },
              {
                text: 'iPhone',
                img: './../../../static/images/categories/categories_014.JPG'
              },
              {
                text: 'vivo',
                img: './../../../static/images/categories/categories_015.JPG'
              },
              {
                text: 'oppo',
                img: './../../../static/images/categories/categories_016.JPG'
              },
              {
                text: '魅族',
                img: './../../../static/images/categories/categories_017.JPG'
              },
              {
                text: '三星',
                img: './../../../static/images/categories/categories_018.JPG'
              },
              {
                text: '一加',
                img: './../../../static/images/categories/categories_019.JPG'
              },
              {
                text: '锤子',
                img: './../../../static/images/categories/categories_020.JPG'
              }
            ]
          },
          {
            title: '厨房小电',
            data: [
              {
                text: '小米',
                img: './../../../static/images/categories/categories_021.JPG'
              },
              {
                text: '华为',
                img: './../../../static/images/categories/categories_022.JPG'
              },
              {
                text: '荣耀',
                img: './../../../static/images/categories/categories_023.JPG'
              },
              {
                text: 'iPhone',
                img: './../../../static/images/categories/categories_024.JPG'
              },
              {
                text: 'vivo',
                img: './../../../static/images/categories/categories_025.JPG'
              },
              {
                text: 'oppo',
                img: './../../../static/images/categories/categories_026.JPG'
              },
              {
                text: '魅族',
                img: './../../../static/images/categories/categories_027.JPG'
              },
              {
                text: '三星',
                img: './../../../static/images/categories/categories_028.JPG'
              },
              {
                text: '一加',
                img: './../../../static/images/categories/categories_029.JPG'
              },
              {
                text: '锤子',
                img: './../../../static/images/categories/categories_030.JPG'
              }
            ]
          },
          {
            title: '个护健康',
            data: [
              {
                text: '小米',
                img: './../../../static/images/categories/categories_031.JPG'
              },
              {
                text: '华为',
                img: './../../../static/images/categories/categories_032.JPG'
              },
              {
                text: '荣耀',
                img: './../../../static/images/categories/categories_033.JPG'
              },
              {
                text: 'iPhone',
                img: './../../../static/images/categories/categories_034.JPG'
              },
              {
                text: 'vivo',
                img: './../../../static/images/categories/categories_035.JPG'
              },
              {
                text: 'oppo',
                img: './../../../static/images/categories/categories_036.JPG'
              },
              {
                text: '魅族',
                img: './../../../static/images/categories/categories_037.JPG'
              },
              {
                text: '三星',
                img: './../../../static/images/categories/categories_038.JPG'
              },
              {
                text: '一加',
                img: './../../../static/images/categories/categories_039.JPG'
              },
              {
                text: '锤子',
                img: './../../../static/images/categories/categories_040.JPG'
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    tab (index) {
      this.isTab = index
    }
  },
  activated () {
    this.$store.commit('CHANGE_TAB', 'icon-leimu')
  }
}
</script>

<style lang="scss" scoped>
#category{
  position: relative;
  height: 100%;
  width: 100%;
}
.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 25%;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: $main-bg-color;
  ul{
    li{
      padding: .15rem 0;
      font-size: .24rem;
      color: $title_color;
      text-align: center;
    }
  }
}
.tab{
      background-color: #fff;
    }
.content{
  position: absolute;
  width: 75%;
  right: 0;
  padding: .1rem .1rem .6rem .1rem;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: #fff;
  img{
    display: block;
    width: 100%;
  }
  div{
    margin-top: .26rem;
    p{
      display: block;
      margin-bottom: .05rem;
      font-size: .28  rem;
      font-weight: bold;
      color: #000;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        box-sizing: border-box;
        width: 25%;
        padding: .05rem;
        div{
          p{
            font-size: .24rem;
            text-align: center;
            color: #888;
          }
        }
      }
    }
  }
}
</style>
