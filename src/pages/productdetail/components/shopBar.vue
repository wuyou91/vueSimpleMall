<template>
  <div id="shop-bar">
    <ul>
      <li><i class="iconfont icon-kefu"></i>客服</li>
      <li><i class="iconfont icon-31shoucang"></i>收藏</li>
    </ul>
    <ul>
      <li @click="addCart">加入购物车</li>
      <li>立即购买</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'shopBar',
  props: ['prodData'],
  methods: {
    addCart () {
      let prod = {
        id: this.prodData.id,
        name: this.prodData.name,
        desc: this.prodData.desc,
        price: this.prodData.price,
        img: this.prodData.mainImg[0]
      }
      this.$store.dispatch('addCart', prod)
    }
  }
}
</script>

<style lang='scss' scoped>
  #shop-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1rem;
    background: #fff;
    border-top: 1px solid $gray-light;
    ul{
      float: left;
      li{
        text-align: center;
      }
      &:first-child{
        width: 35%;
        display: flex;
        justify-content: space-around;
        li{
          font-size: .28rem;
          color: #888;
          padding: .05rem .3rem;
          i{
            font-size: .44rem;
            display: block;
          }
        }
      }
      &:nth-child(2){
        width: 65%;
        li{
          float: left;
          width: 50%;
          line-height: 1rem;
          color: #fff;
          letter-spacing: 2px;
          &:nth-child(1){
            background: #ff9500;
          }
          &:nth-child(2){
            background: #ff0036;
          }
        }
      }
    }
  }
</style>
