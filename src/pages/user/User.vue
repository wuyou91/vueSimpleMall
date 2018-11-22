<template>
  <div id="user">
    用户页面
  </div>
</template>

<script>
export default {
  name: 'User',
  mounted () {
    this.$store.commit('CHANGE_TAB', 'icon-yonghufill')
  }
}
</script>

<style scoped>

</style>
