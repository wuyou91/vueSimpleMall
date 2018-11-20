<template>
  <div class="banner">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in banner" :key="index">
          <img :src="item" class="swiperImg">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    banner: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style scoped>
.swiperImg{
  width: 100%;
}
</style>
