<template>
  <div id="foot">
    <ul>
      <li v-for="item in nav"
      @click="changeRouter(item.router)"
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
  name: 'Foot',
  props: {
    footNavActiveClass: String
  },
  data () {
    return {
      isLogin: false,
      nav: [
        {navTitle: '首页', primClass: 'icon-shouye', activeClass: 'icon-shouyefill', router: 'home'},
        {navTitle: '分类', primClass: 'icon-leimu', activeClass: 'icon-leimu', router: 'category'},
        {navTitle: '购物车', primClass: 'icon-gouwuche', activeClass: 'icon-gouwuchefill', router: 'car'},
        {navTitle: '我的', primClass: 'icon-yonghu', activeClass: 'icon-yonghufill', router: 'user'}
      ]
      // selectedRouter: 'home'
    }
  },
  methods: {
    changeRouter (router) {
      // this.selectedRouter = router
      // if (router === 'user') {
      //   this.isLogin ? this.$router.push(router) : this.$router.push('/login')
      // } else {
      this.$router.push(router)
      // }
    }
  }
  // created () {
  //   this.selectedRouter = sessionStorage.getItem('selected') // 读取sessionStorage中的数据并赋值给num，以保持之前的选择状态
  //   window.addEventListener('beforeunload', () => {
  //     sessionStorage.setItem('selected', this.selectedRouter) // 刷新页面时将选项卡选中的数据储存在sessionStorage中，用于刷新后保持原来状态，不能用localStorage，因为关闭页面需要清除数据。
  //   })
  // }
}
</script>

<style lang="scss" scoped>
#foot{
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
