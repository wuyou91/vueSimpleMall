<template>
  <div id="login">
    <div class="content">
      <div class="title">
        用户登录
      </div>
      <input type="text" placeholder="用户名">
      <input type="password" placeholder="密码">
      <div class="btn">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
  .content{
    width: 3rem;
    margin: 0 auto;
    .title{
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
    input{
      display: block;
      width: 100%;
      height: .4rem;
    }
  }
</style>
