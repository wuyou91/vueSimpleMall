<template>
  <div id="login">
    <div class="content">
      <div class="title">
        请登录
      </div>
      <input type="text" placeholder="用户名">
      <input type="password" placeholder="密码">
      <div class="btn">登录</div>
      <div>
        <p>没有账号？<router-link to="/register">去注册</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
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
    margin-bottom: .3rem;
  }
  input{
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: .4rem;
    padding: .3rem 0;
    margin-bottom: .2rem;
    border: none;
    border-bottom: 1px solid $gray_light;
  }
  .btn{
    box-sizing: border-box;
    padding: .1rem;
    margin: .5rem 0;
    text-align: center;
    color: #fff;
    background: $button-color;
  }
}
</style>
