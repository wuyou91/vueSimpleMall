<template>
  <div id="home">
    <banner></banner>
    <div id="content">
      <alpha></alpha>
    </div>
  </div>
</template>

<script>
import banner from './components/banner'
import alpha from './components/alpha'
export default {
  name: 'Home',
  components: {
    banner,
    alpha
  }
}
</script>

<style scoped>
#content{
  margin: .1rem .2rem;
}
</style>
