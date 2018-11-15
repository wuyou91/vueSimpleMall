<template>
  <div class="product">
    <div class="title">{{productItem.name}}</div>
    <!-- 区块广告 -->
    <div class="ad"><img v-lazy="productItem.img"></div>
    <div class="prod-content">
      <div class="prod-box"
        v-for = "item in productItem.content"
        :key = "item.id"
        @click = "goProductDetails(item.id)"
        >
        <div class="prod">
          <img v-lazy="item.img">
          <div class="prod-title">{{item.name}}</div>
          <div class="prod-price"><span>￥</span>{{item.price}}</div>
          <div class="prod-desc">{{item.desc}}</div>
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
      this.$router.push({
        name: 'ProductDetail',
        query: {
          pid: productId
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.product {
  width: 100%;
  margin-bottom: .12rem;
  .title{
    font-size: .36rem;
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
        font-size: .32rem;
        font-weight: 600;
        color: #333;
        text-align: center;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
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
      .prod-desc{
        font-size: .24rem;
        color: #888;
        text-align: center;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
