<template>
  <div id="car">
    <ul>
      <li v-for="(item, idex) of carts" :key='idex'>
        <img :src="item.img">
        <div class="info">
          <div class="title">{{item.name}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
        <div class="del">删除</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Car',
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
  }
}
</script>
<style lang="scss" scoped>
#car{
  background: $main-bg-color;
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
