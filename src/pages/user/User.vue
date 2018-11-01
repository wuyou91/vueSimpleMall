<template>
  <div id="user">
    用户页面
    <foot :footNavActiveClass = "footNavActiveClass"></foot>
  </div>
</template>

<script>
import foot from '@/pages/common/Foot'
export default {
  name: 'User',
  components: {
    foot
  },
  data () {
    return {
      footNavActiveClass: 'icon-yonghufill'
    }
  }
}
</script>

<style scoped>

</style>
