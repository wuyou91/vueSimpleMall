<template>
  <div id="car">
    <top-bar></top-bar>
    <div class="bg" v-if="!carts.length">
      还没有任何商品，<br> 赶快去买买买吧！
    </div>
    <ul>
      <li v-for="(item, index) of carts" :key='index'>
        <img :src="item.img">
        <div class="info">
          <div class="title">{{item.name}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
        <div class="del" @click= "delProd(index)">删除</div>
      </li>
    </ul>
  </div>
</template>

<script>
import topBar from '../common/TopBar'
export default {
  name: 'Car',
  components: {
    topBar
  },
  computed: {
    carts () {
      return this.$store.state.cart
    }
  },
  activated () {
    this.$store.commit('CHANGE_TAB', 'icon-gouwuchefill')
    // 根据用户ID获取购物车信息
    if (sessionStorage.getItem('login')) {
      let userId = JSON.parse(sessionStorage.getItem('login')).id
      this.$store.dispatch('getCartInfo', userId)
    }
  },
  methods: {
    delProd (index) {
      this.$store.dispatch('delProd', index)
    }
  }
}
</script>
<style lang="scss" scoped>
#car{
  padding-top: 1.1rem;
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
}
  li{
    background: #fff;
    box-sizing: border-box;
    margin: .2rem 0;
    width: 100%;
    display: flex;
    img{
      width: 2rem;
      height: 2rem;
    }
    .info{
      width: 3.8rem;
      margin: 0 .2rem;
      .title{
        padding: .2rem 0;
        font-size: .32rem;
      }
      .price{
        padding-top: .2rem;
        color: #ff1942;
        font-size: .48rem;
      }
    }
    .del{
      width: 1.2rem;
      text-align: center;
      line-height: 2rem;
      color: #fff;
      background: #ff1942;
    }
  }
</style>
