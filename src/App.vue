<template>
  <div id="app">
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import foot from '@/pages/common/Foot'
export default {
  name: 'App',
  components: {
    foot
  }
}
</script>

<style>

</style>
