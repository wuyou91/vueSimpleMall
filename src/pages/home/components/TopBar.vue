<template>
  <div id="top-bar">
    <div class="hello">
      {{hello}}<router-link to="/login" v-if= "!hasLogined" class="go-login">去登录</router-link>
      <span v-if="hasLogined" @click="signOut">退出</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
      hello: '还未登录，',
      hasLogined: false
    }
  },
  // computed: {
  //   userInfo () {
  //     return this.$store.state.userInfo
  //   }
  // },
  methods: {
    check () {
      let userInfo = JSON.parse(sessionStorage.getItem('login'))
      if (userInfo) {
        this.hasLogined = true
        let time = new Date().getHours()
        let text = ''
        if (time > 4 && time <= 11) {
          text = '上午好！'
        } else if (time > 11 && time <= 18) {
          text = '下午好'
        } else {
          text = '晚上好'
        }
        this.hello = userInfo.name + '，' + text + '！'
      }
    },
    signOut () {
      sessionStorage.removeItem('login')
      this.$store.dispatch('delCart')
      this.hasLogined = false
      this.hello = '还未登录，'
    }
  },
  activated () {
    this.check()
  }
}
</script>

<style lang="scss" scoped>
  #top-bar{
    height: .5rem;
    line-height: .5rem;
    text-align: right;
    padding: 0 .2rem;
    color: $text-color;
    font-size: .24rem;
    .go-login{
      color: $blue;
    }
  }
</style>
