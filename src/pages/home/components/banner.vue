<template>
  <div class="banner">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item in banners" :key="item.title">
          <a :href="item.url">
            <img :src="item.img" class="swiperImg">
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      banners: [
        {
          title: '轮播图1',
          img: require('@/assets/images/banner_01.jpg'),
          url: 'http://www.baidu.com'
        },
        {
          title: '轮播图2',
          img: require('@/assets/images/banner_02.jpg'),
          url: 'http://www.sina.com'
        },
        {
          title: '轮播图3',
          img: require('@/assets/images/banner_03.jpg'),
          url: 'http://www.qq.com'
        },
        {
          title: '轮播图4',
          img: require('@/assets/images/banner_04.jpg'),
          url: 'http://www.github.com'
        }
      ],
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
