<template>
  <div id="car">
    购物车
    <foot :footNavActiveClass = "footNavActiveClass"></foot>
  </div>
</template>

<script>
import foot from '@/pages/common/Foot'
export default {
  name: 'Car',
  components: {
    foot
  },
  data () {
    return {
      footNavActiveClass: 'icon-gouwuchefill'
    }
  }
}
</script>

<style scoped>

</style>
