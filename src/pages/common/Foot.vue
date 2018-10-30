<template>
  <div id="foot">
    <ul>
      <li v-for="(item, index) in navTitle"
      @click="isActived(index)"
      :key="index"
      :class="{active: index===num}">
        <i class="iconfont"
        :class="index===num?activeClass[index]:primClass[index]"></i>
        <div>{{item}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {
      isLogin: false,
      navTitle: ['首页', '分类', '购物车', '我的'],
      primClass: ['icon-shouye', 'icon-leimu', 'icon-gouwuche', 'icon-yonghu'],
      activeClass: ['icon-shouyefill', 'icon-leimu', 'icon-gouwuchefill', 'icon-yonghufill'],
      rout: ['home', 'category', 'car', 'user'],
      num: 0
    }
  },
  methods: {
    isActived (index) {
      this.num = index
      if (index === 3) {
        this.isLogin ? this.$router.push(this.rout[index]) : this.$router.push('/login')
      } else {
        this.$router.push(this.rout[index])
      }
    }
  },
  created () {
    this.num = Number(sessionStorage.getItem('isTab')) // 读取sessionStorage中的数据并赋值给num，以保持之前的选择状态
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('isTab', this.num) // 刷新页面时将选项卡选中的数据储存在sessionStorage中，用于刷新后保持原来状态，不能用localStorage，因为关闭页面需要清除数据。
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/base.scss';
#foot{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width:100%;
  background: #fff;
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
