<template>
  <div id="home">
    <banner :banner = "banner"></banner>
    <div id="content">
      <products v-for = "item in products" :key = "item.id" :productItem="item"></products>
    </div>
  </div>
</template>

<script>
import banner from './components/banner'
import products from './components/products'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
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
      axios.get('http://10.10.3.58:8085/homeData').then((res) => {
        this.banner = res.data.banner
        this.products = res.data.products
      })
    }
  },
  mounted () {
    this.getHomeData()
  }
}
</script>

<style scoped>
#content{
  margin: .2rem .2rem 1rem .2rem;
}
</style>
