<template>
  <div id="car">
    <div class="top-bar">
      <div class="back" @click="goBack">
        <i class="iconfont icon-fanhui1"></i>
      </div>
      <div class="control" @click = "changeControl">
        <span v-show="!showDone">管理</span>
        <span v-show="showDone">完成</span>
      </div>
    </div>
    <div class="bg" v-if="!carts.length">
      还没有任何商品，<br> 赶快去买买买吧！
    </div>
    <ul>
      <li v-for="(item, index) of carts" :key='index'>
        <i class="check-box iconfont icon-weixuanzhongyuanquan"
        :class = "{'icon-31xuanzhong': hasCheckAll}"
        @click="checkSwitch($event,item)"
        v-show="showDone"></i>
        <img :src="item.img">
        <div class="info">
          <div class="title">{{item.name}}</div>
          <div class='desc'>
            <div class="price">￥{{item.price}}</div>
            <div class="del" @click="deletProd(index)">删除</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="bg_bottom" v-show="carts.length>4">已经到底部了</div>
    <div class="delete-bar" v-show="showDone">
      <div class="check-all"><i class="iconfont icon-weixuanzhongyuanquan"  @click="checkAll"></i>全选</div>
      <div class="delete-batch"
      :class = "{'readyDelete': readyToDelateProduct.length}"
      @click="deleteProductBatch()"><i class="iconfont icon-delete"></i>删除已选</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Car',
  data () {
    return {
      showDone: false,
      hasCheckAll: false,
      readyToDelateProduct: []
    }
  },
  computed: {
    carts () {
      return this.$store.state.cart
    }
  },
  created () {
    // 根据用户ID获取购物车信息
    if (sessionStorage.getItem('login')) {
      let userId = JSON.parse(sessionStorage.getItem('login')).id
      this.$store.dispatch('getCartInfo', userId)
    }
  },
  activated () {
    this.$store.commit('CHANGE_TAB', 'icon-gouwuchefill')
  },
  methods: {
    deletProd (index) {
      this.$store.dispatch('deletProd', index)
    },
    goBack () {
      this.$router.back(-1)
    },
    changeControl () {
      this.showDone = !this.showDone
    },
    checkSwitch (event, prod) {
      let checkClass = event.target.classList
      if (checkClass.contains('icon-31xuanzhong')) {
        this._.pull(this.readyToDelateProduct, prod)
        checkClass.remove('icon-31xuanzhong')
      } else {
        this.readyToDelateProduct.push(prod)
        checkClass.add('icon-31xuanzhong')
      }
    },
    deleteProductBatch () {
      if (this.readyToDelateProduct.length) {
        this.$store.dispatch('deletProductBatch', this.readyToDelateProduct)
      }
    },
    checkAll (event) {
      if (this.hasCheckAll) {
        this.readyToDelateProduct = []
        this.hasCheckAll = false
        event.target.classList.remove('icon-31xuanzhong')
      } else {
        this.readyToDelateProduct = [...this.carts]
        this.hasCheckAll = true
        event.target.classList.add('icon-31xuanzhong')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#car{
  padding: 1.1rem 0 0 0;
  background: $main-bg-color;
  position: relative;
  .bg{
    position: absolute;
    top: 6rem;
    left: 50%;
    margin-top: -30px;
    margin-left: -80px;
    width: 160px;
    height: 60px;
    font-size: 14px;
    text-align: center;
    color: $text-color;
  }
  .bg_bottom{
    text-align: center;
    font-size: .28rem;
    color: $text-color;
    width: 100%;
    padding-bottom: .3rem;
    margin-bottom: .8rem;
  }
}
  li{
    background: #fff;
    box-sizing: border-box;
    margin: .2rem 0;
    width: 100%;
    display: flex;
    color: #888;
    .check-box{
      font-size: .48rem;
      margin: .7rem 0 .5rem .1rem;
    }
    img{
      width: 2rem;
      height: 2rem;
    }
    .info{
      width: 5rem;
      margin: 0 .2rem;
      .title{
        padding: .2rem 0;
        font-size: .32rem;
      }
      .desc{
        margin-top: .2rem;
        .price{
          float: left;
          color: #ff1942;
          font-size: .48rem;
        }
        .del{
          float: right;
          width: 1.6rem;
          text-align: center;
          line-height: .6rem;
          color: #fff;
          border-radius: .3rem;
          background: #ff1942;
        }
      }
    }
  }
  .top-bar{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 1rem;
    z-index: 999;
    background: $blue;
    .back{
      float: left;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      i{
        font-size: .4rem;
        color: #fff;
      }
    }
    .control{
      float: right;
      width: 1rem;
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      color: #fff;
      padding: 0 .3rem;
    }
  }
  .delete-bar{
    box-sizing: border-box;
    position: fixed;
    bottom: .8rem;
    width: 100%;
    padding: .3rem .4rem .3rem .1rem;;
    background: #fff;
    color: #888;
    .check-all{
      float: left;
      font-size: .36rem;
      i{
        font-size: .42rem;
         margin-right: .1rem;
      }
    }
    .delete-batch{
      float: right;
      i{
        font-size: .42rem;
        margin-right: .1rem;
      }
    }
    .readyDelete{
      color: #ff1942;
    }
  }
  .icon-31xuanzhong{
    color: $blue;
  }
</style>
