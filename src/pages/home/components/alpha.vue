<template>
  <div class="alpha">
    <div class="title">Alpha系列</div>
    <!-- 区块广告 -->
    <div class="ad"></div>
    <div class="prod-content">
      <div class="prod-box">
        <div class="prod">
          <img src="./../../../../static/images/alpha_01.jpg" alt="">
          <div class="prod-title">Alpha1 pro</div>
          <div class="prod-price"><span>￥</span>3999.00</div>
        </div>
      </div>
      <div class="prod-box">
        <div class="prod">
          <img src="./../../../../static/images/alpha_02.jpg" alt="">
          <div class="prod-title">Alpha2</div>
          <div class="prod-price"><span>￥</span>12999.00</div>
        </div>
      </div>
      <div class="prod-box">
        <div class="prod">
          <img src="./../../../../static/images/alpha_03.jpg" alt="">
          <div class="prod-title">Qrobot</div>
          <div class="prod-price">即将上市</div>
        </div>
      </div>
      <div class="prod-box">
        <div class="prod">
          <img src="./../../../../static/images/alpha_04.jpg" alt="">
          <div class="prod-title">Alpha 1s</div>
          <div class="prod-price"><span>￥</span>3699.00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alpha'
}
</script>

<style lang="scss" scoped>
.alpha {
  width: 100%;
  margin-bottom: .6rem;
  .title{
    font-size: .12rem;
    color: #515151;
    line-height: .5rem;
  }
  .prod-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .prod-box {
      box-sizing: border-box;
      width: 50%;
      padding: 0 0.05rem 0.1rem 0;
      margin-right: -0.05rem;
      .prod {
        padding: .1rem 0;
        width: 100%;
        background: #fff;
        img {
          width: 100%;
        }
        .prod-title{
          margin: .05rem 0;
          font-size: .14rem;
          color: #333;
          text-align: center;
        }
        .prod-price{
          margin: .05rem 0;
          font-size: .18rem;
          color: #00acf8;
          text-align: center;
          span{
            font-size: .12rem;
          }
        }
      }
    }
  }
}
</style>
