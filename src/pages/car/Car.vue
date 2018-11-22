<template>
  <div id="car">
    购物车
  </div>
</template>

<script>
export default {
  name: 'Car',
  mounted () {
    this.$store.commit('CHANGE_TAB', 'icon-gouwuchefill')
  }
}
</script>

<style scoped>

</style>
