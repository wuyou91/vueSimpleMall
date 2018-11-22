<template>
  <div id="tab-bar">
    <ul>
      <li v-for="item in nav"
      @click="tab(item)"
      :key="item.router"
      :class="{active: item.activeClass === footNavActiveClass}">
        <i class="iconfont"
        :class="item.activeClass === footNavActiveClass ? item.activeClass : item.primClass"
        ></i>
        <div>{{item.navTitle}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      isLogin: false,
      nav: [
        {navTitle: '首页', primClass: 'icon-shouye', activeClass: 'icon-shouyefill', router: 'home'},
        {navTitle: '分类', primClass: 'icon-leimu', activeClass: 'icon-leimu', router: 'category'},
        {navTitle: '购物车', primClass: 'icon-gouwuche', activeClass: 'icon-gouwuchefill', router: 'car'},
        {navTitle: '我的', primClass: 'icon-yonghu', activeClass: 'icon-yonghufill', router: 'user'}
      ]
    }
  },
  methods: {
    tab (item) {
      this.$router.push(item.router)
    }
  },
  computed: {
    footNavActiveClass () {
      return this.$store.state.tabed
    }
  }
}
</script>

<style lang="scss" scoped>
#tab-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width:100%;
  background: #fff;
  box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, .2);

  ul{
    padding: 0.05rem 0;
    display: flex;
    justify-content: space-around;
    color: $title_color;
    li{
      text-align: center;
      &.active{
        color: #0067b1;
      }
      i{
        font-size: .4rem;
      }
      div{
        font-size: .24rem;
      }
    }
  }
}
</style>
