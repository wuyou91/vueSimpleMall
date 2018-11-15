<template>
  <div class="product-detail">
    <div class="detail-gallery">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in detail.mainImg" :key="index">
          <img :src="item" class="swiperImg">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="detail-head">
      <div class="price">
        <div class="price-now">
          ￥<span>{{detail.price}}</span>
        </div>
        <!-- <div class="price-original">
          双11狂欢价 499
        </div> -->
      </div>
      <div class="title">{{detail.name}}</div>
      <div class="desc">{{detail.desc}}</div>
      <ul>
        <li v-for="(item,index) in detail.server" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="detail-content">
      <div class="detail-content-title">
        <div class="detail-content-title-wrap">
          <div @click="handleTap(true)">图文详情</div>
          <div @click="handleTap(false)">产品参数</div>
        </div>
      </div>
      <div class="detail-content-info">
        <div class="info-img" v-show="tap">
          <img v-for="(item, index) in detail.info" v-lazy="item" :key="index">
        </div>
        <div class="info-detail" v-show="!tap">
          <ul>
            <li v-for="item in detail.parameter" :key = item.name>
              <div>{{item.name}}</div>
              <div>{{item.val}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProductDetail',
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
      },
      detail: {},
      tap: true
    }
  },
  methods: {
    handleTap (b) {
      this.tap = b
    },
    getDetailData () {
      axios.get(`http://10.10.3.58:8085/pageDetail?id=${this.$route.query.pid}`).then((r) => {
        this.detail = r.data[0]
      })
    }

  },
  mounted () {
    this.getDetailData()
  }
}
</script>

<style lang="scss" scoped>
.product-detail{
  background: #feece9;
}
.detail-gallery{
  width: 100%;
  overflow: hidden;
  .swiperImg{
    width: 100%;
  }
}
.detail-head{
  background: #fff;
  .price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fd103e;
    padding: .2rem;
    margin-bottom:.2rem;
    font-size: .36rem;;
    color: #fff;
    .price-now{
      span{
        font-size: .64rem;
      }
    }
  }
  .title{
    padding: 0 .2rem;
    font-size: .4rem;
  }
  .desc{
    padding: 0 .2rem;
    font-size: .28rem;
    color: #666;
    margin: .3rem 0;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    padding: .2rem;
    li{
      font-size: .24rem;
      // width: 33.3%;
      box-sizing: border-box;
      text-align: center;
      margin-right: .4rem;
      margin-bottom: .3rem;
      color: #666;
      &:nth-child(3n),&:last-child{
        margin-right: none;
      }
    }
  }
}
.detail-content{
  width: 100%;
  overflow: hidden;
  .detail-content-title{
    width: 100%;
    background: #fff;
    padding: .2rem;
    margin-top: .2rem;
    .detail-content-title-wrap{
      width: 60%;
      margin: .2rem auto;
      display: flex;
      &>div{
        width: 50%;
        height: .6rem;
        line-height: .6rem;
        border-radius: .3rem;
        text-align: center;
        color: #fff;
        background: $blue;
      }
    }
  }
}
.detail-content-info{
  background: #fef5f4;
  .info-img{
    width: 100%;
    overflow: hidden;
    img{
    display: block;
    width: 100%;
    }
  }
  .info-detail{
    width: 100%;
    ul{
      padding: .4rem;
      li{
        color: #444;
        width: 100%;
        display: flex;
        margin-bottom: .1rem;
        div:first-child{
          flex-shrink:0;
          width: 30%;
        }
      }
    }
  }
}
</style>
