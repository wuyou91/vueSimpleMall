<template>
  <div id="top-bar" :class="topBarStyle">
    <div class="back" @click="goBack">
      <i class="iconfont icon-fanhui1"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopBar',
  methods: {
    goBack () {
      this.$router.back(-1)
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
    background: rgba(0,0,0,.2);
    .back{
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
    }
    i{
      font-size: .4rem;
      color: #fff;
    }
  }
</style>
