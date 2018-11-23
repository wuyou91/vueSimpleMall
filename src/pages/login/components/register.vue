<template>
  <div id="register">
    <div class="succeeded" v-if="registerSucceeded">
      <div>
        <p>注册成功!<br>
        <router-link to="/login">去登录</router-link>
        &#160;&#160;
        <router-link to="/home">回首页</router-link>
        </p>
      </div>
    </div>
    <div class="content">
      <div class="title">账号注册</div>
      <div class="input-area username">
        <input type="text" placeholder="请输入用户名" v-model="formData.name">
        <p>{{tipsText.name}}</p>
      </div>
      <div class="input-area password">
        <input type="password" placeholder="请输入密码" v-model="formData.password">
        <p>{{tipsText.password}}</p>
      </div>
      <div class="input-area repassword">
        <input type="password" placeholder="请再次输入密码" v-model="formData.repassword">
        <p>{{tipsText.repassword}}</p>
      </div>
      <div class="btn" @click = "register">注&#160;&#160;册</div>
      <div class="tips-text">
        <p>已有账号？
          <router-link to="/login">去登录</router-link>
          &#160;&#160;
          <router-link to="/home">回首页</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'register',
  data () {
    return {
      registerSucceeded: false,
      tipsText: {
        name: '',
        password: '',
        repassword: ''
      },
      formData: {
        name: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    register () {
      let zw = /^[\u4E00-\u9FA5]{1,5}$/ // 判定是否为5字内中文
      let space = /\s/ // 判断是否有空格
      if (!zw.test(this.formData.name.trim())) {
        this.tipsText = {}
        this.tipsText.name = '用户名必须为五个字以内的中文'
      } else if (this.formData.password === '') {
        this.tipsText = {}
        this.tipsText.password = '密码不能为空'
      } else if (space.test(this.formData.password)) {
        this.tipsText = {}
        this.tipsText.password = '密码不能有空格'
      } else if (this.formData.repassword === '') {
        this.tipsText = {}
        this.tipsText.repassword = '请再次输入密码，以确认密码'
      } else if (this.formData.password !== this.formData.repassword) {
        this.tipsText = {}
        this.tipsText.password = '两次输入的密码不一致'
        this.tipsText.repassword = '两次输入的密码不一致'
      } else {
        this.tipsText = {}
        axios.post('http://10.10.3.58:8085/user', this.formData)
        this.registerSucceeded = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#register{
  width: 100%;
  height: 100%;
  position: relative;
  .succeeded{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 999;
    &>div{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4rem;
      height: 2rem;
      margin-top: -1rem;
      margin-left: -2rem;
      p{
        font-size: .36rem;
        line-height: .6rem;
        text-align: center;
      }
    }
  }
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
