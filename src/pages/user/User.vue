<template>
  <div id="user">
    <div class="user-info">
      <img src="http://demo.cdn.yancx.cn/vue-simpleMall/tx.jpg" />
      <div class="user-name">{{ userInfo.name }}</div>
      <div class="user-id">用户ID： {{ userInfo.id }}</div>
    </div>
    <div class="list">
      <ul>
        <li @click="goCart">
          <i class="iconfont icon-gouwuche"></i>购物车({{ carsNum }})
        </li>
        <li><i class="iconfont icon-31shoucang"></i>收藏</li>
        <li><i class="iconfont icon-leimu"></i>其他</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      userInfo: JSON.parse(sessionStorage.getItem("login")),
    };
  },
  computed: {
    carsNum() {
      return this.$store.state.cart.length;
    },
  },
  created() {
    // 根据用户ID获取购物车信息
    if (sessionStorage.getItem("login")) {
      let userId = JSON.parse(sessionStorage.getItem("login")).id;
      this.$store.dispatch("getCartInfo", userId);
    }
  },
  activated() {
    this.$store.commit("CHANGE_TAB", "icon-yonghufill");
  },
  methods: {
    goCart() {
      this.$router.push("/car");
    },
  },
};
</script>

<style lang="scss" scoped>
#user {
  width: 100%;
  height: 100%;
  background: $main-bg-color;
}
.user-info {
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  background: #fff;
  img {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.3);
  }
  .user-name {
    font-size: 0.4rem;
    font-weight: 600;
    margin-top: 0.1rem;
  }
  .user-id {
    color: #999;
    line-height: 0.5rem;
  }
}
.list {
  padding: 0.4rem 0;
  margin-top: 0.2rem;
  background: #fff;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    li {
      font-size: 0.36rem;
      i {
        margin-right: 0.04rem;
      }
    }
  }
}
</style>
