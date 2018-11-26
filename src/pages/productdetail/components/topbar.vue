<template>
  <div id="top-bar" :class="topBarStyle">
    <div class="back" @click="goBack">
      <i class="iconfont icon-fanhui1"></i>
    </div>
    <div class="cart" @click="goCart">
      <i class="iconfont icon-gouwuche"></i>
      <span v-show="carsNum">{{carsNum}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topBar',
  data () {
    return {
      topBarStyle: 'black'
    }
  },
  computed: {
    carsNum () {
      return this.$store.state.cart.length
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.topBarStyle = scrollTop >= 80 ? 'light' : 'black'
    },
    goBack () {
      this.$router.back(-1)
    },
    goCart () {
      this.$router.push('/car')
    }
  }
}
</script>

<style lang='scss' scoped>
  #top-bar{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 1rem;
    z-index: 999;
    transition: all .3s ease;
    &>div{
      width: .8rem;
      height: .8rem;
      line-height: .8rem;
      text-align: center;
      margin: .1rem .4rem;
      border-radius: 50%;
      &.back{
        float: left;
      }
      &.cart{
        float: right;
        position: relative;
        span{
          position: absolute;
          top: 0;
          right: 0;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: red;
          font-size: 12px;
          line-height: 18px;
          color: #fff;
        }
      }
    }
    i{
      font-size: .48rem;
    }
  }
  .black{
    background:none;
    border: none;
    &>div{
      background:rgba(0, 0, 0, .4);
      color: #fff;
    }
  }
  .light{
    background: #fff;
    border-bottom:1px solid $gray-light;
    &>div{
      background: none;
      color: #999;
    }
  }
</style>
