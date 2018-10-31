<template>
  <div class="product">
    <div class="title">{{productItem.title}}</div>
    <!-- 区块广告 -->
    <div class="ad"><img :src="productItem.titleImage"></div>
    <div class="prod-content">
      <div class="prod-box"
        v-for = "item in productItem.content"
        :key = "item.id"
        @click = "goProductDetails(item.productId)"
        >
        <div class="prod">
          <img :src="item.images">
          <div class="prod-title">{{item.title}}</div>
          <div class="prod-price"><span>￥</span>{{item.price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productes',
  props: {
    productItem: Object
  },
  methods: {
    goProductDetails (productId) {
      this.$router.push(`ProductDetail?pd=${productId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  margin-bottom: .12rem;
  .title{
    font-size: .48rem;
    color: #515151;
    line-height: 1rem;
  }
  .ad{
    width: 100%;
    img{
      width:100%;
    }
  }
}
.prod-content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .prod-box {
    box-sizing: border-box;
    width: 50%;
    padding: 0 .1rem .2rem 0;
    margin-right: -.1rem;
    .prod {
      padding: .2rem 0;
      width: 100%;
      background: #fff;
      img {
        width: 100%;
      }
      .prod-title{
        margin: .2rem 0;
        font-size: .28rem;
        color: #333;
        text-align: center;
      }
      .prod-price{
        margin: .2rem 0;
        font-size: .36rem;
        color: #00acf8;
        text-align: center;
        span{
          font-size: .24rem;
        }
      }
    }
  }
}
</style>
