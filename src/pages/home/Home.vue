<template>
    <div id="home">
      <top-bar></top-bar>
      <banner :banner = "banner"></banner>
      <div id="content">
        <products v-for = "item in products" :key = "item.id" :productItem="item"></products>
      </div>
    </div>
</template>

<script>
import topBar from './components/TopBar'
import banner from './components/banner'
import products from './components/products'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    topBar,
    banner,
    products
  },
  data () {
    return {
      banner: [],
      products: []
    }
  },
  methods: {
    getHomeData () {
      axios.get('http://10.10.3.58:8085/homeBanner').then((res) => {
        this.banner = res.data
      })
      axios.get('http://10.10.3.58:8085/homeProdList').then((res) => {
        this.products = res.data
      })
    }
  },
  mounted () {
    this.getHomeData()
  },
  activated () {
    this.$store.commit('CHANGE_TAB', 'icon-shouyefill')
    // 根据用户ID获取购物车信息
    if (sessionStorage.getItem('login')) {
      let userId = JSON.parse(sessionStorage.getItem('login')).id
      this.$store.dispatch('getCartInfo', userId)
    }
  }
}
</script>

<style lang="scss" scoped>
#home{
  background-color: $main-bg-color;
  #content{
    margin: .2rem .2rem 1rem .2rem;
  }
}
</style>
