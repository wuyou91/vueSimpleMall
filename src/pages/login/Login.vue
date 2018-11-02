<template>
  <div id="login">
    <div class="content">
      <div class="title">请登录</div>
      <div class="input-area username">
        <input type="text" placeholder="用户名" v-model="formData.name">
        <p>{{tips.name}}</p>
      </div>
      <div class="input-area password">
        <input type="password" placeholder="密码" v-model="formData.password">
        <p>{{tips.password}}</p>
      </div>
      <div class="btn" @click = "logIn">登&#160;&#160;录</div>
      <div class="tips-text">
        <p>没有账号？<router-link to="/register">去注册</router-link>&#160;&#160;<router-link to="/home">回首页</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      tips: {
        name: '',
        password: ''
      },
      formData: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    logIn () {
      let userData = JSON.parse(sessionStorage.getItem('userData'))
      if (this.formData.name !== userData.name) {
        this.tips = {}
        this.tips.name = '用户名不存在'
      } else if (this.formData.password !== userData.password) {
        this.tips = {}
        this.tips.password = '密码与用户名不匹配'
      } else {
        this.tips = {}
        sessionStorage.setItem('hasLogin', '1')
        this.$router.push('/user')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#login{
  width: 100%;
  height: 100%;
  position: relative;
}
.content{
  position: absolute;
  left: 50%;
  top: 20%;
  margin-left: -2.5rem;
  color: $title-color;
  width: 5rem;
  height: 6rem;
  .title{
    text-align: center;
    font-size: .40rem;
    font-weight: bold;
    letter-spacing: .1rem;
    margin-bottom: .8rem;
  }
  .input-area{
    position: relative;
    margin-bottom: .6rem;
    input{
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: .4rem;
    padding: .3rem 0;
    font-size: .32rem;
    border: none;
    border-bottom: 1px solid $gray_light;
      &:focus{
        border-bottom: 1px solid $blue;
      }
    }
    p{
      position: absolute;
      top: .7rem;
      left: 0;
      font-size: .24rem;
      color: $warning-color;
    }
  }
  .btn{
    box-sizing: border-box;
    padding: .2rem;
    margin: .6rem 0;
    text-align: center;
    color: #fff;
    background: $button-color;
  }
  .tips-text{
    text-align: center;
    font-size: .24rem;
  }
}
</style>
