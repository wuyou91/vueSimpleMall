<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tab-bar v-if="showTab"></tab-bar>
  </div>
</template>

<script>
import TabBar from './pages/common/TabBar'
export default {
  name: 'App',
  components: {
    TabBar
  },
  computed: {
    showTab () {
      return this.$store.state.showtab
    }
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
