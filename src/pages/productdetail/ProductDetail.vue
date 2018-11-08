<template>
  <div class="product-detail">
    <div class="detail-gallery">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in img" :key="item">
            <img :src="'static/images/mock/' + item + '.jpg'" class="swiperImg">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    <div class="detail-head">
      <div class="price">
        <div class="price-now">
          ￥<span>60.00</span>
        </div>
        <div class="price-original">
          双11狂欢价 499
        </div>
      </div>
      <div class="title">触碰传感器</div>
      <div class="desc">安装红外传感器实现产品功能增加及体验优化</div>
      <div class="tips">
        *触碰传感器是针对物体的碰撞或者按压产生的数据反馈到主控端，从而进行编程，实现不同的功能
      </div>
      <ul>
        <li>7天无理由退货</li>
        <li>15天免费换货</li>
        <li>1年保修</li>
        <li>积分计划</li>
        <li>满100元包邮</li>
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
        <transition name="slideLeft">
          <div class="info-img" v-show="tap">
            <img v-for="item in img" src="static/images/mock/01.jpg" :key="item">
          </div>
        </transition>
        <transition name="slideRight">
          <div class="info-detail" v-show="!tap">
            <ul>
              <li v-for="item in detail" :key = item.name>
                <div>{{item.name}}</div>
                <div>{{item.val}}</div>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
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
      img: ['01', '02', '03', '04', '05', '06', '07'],
      detail: [
        {
          name: '功率',
          val: '≈0.2W'
        },
        {
          name: '工作电压',
          val: '6.8~9.6V DC'
        },
        {
          name: '按键压力',
          val: '180g'
        },
        {
          name: '操作方式',
          val: '按压、单击、双击、长按'
        },
        {
          name: '通信协议',
          val: '半双工串口通信'
        },
        {
          name: '重量',
          val: '7.6±0.1g'
        },
        {
          name: '外观尺寸',
          val: '30mm*30mm*12mm'
        },
        {
          name: '包装清单',
          val: '触碰传感器  *1；连接线  *1 ；ID贴纸  *1 ；说明书  *1'
        }
      ],
      tap: true
    }
  },
  methods: {
    handleTap (b) {
      this.tap = b
    }
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
    font-size: .36rem;
  }
  .desc{
    padding: 0 .2rem;
    font-size: .28rem;
    color: #666;
    margin-bottom: .2rem;
  }
  .tips{
    padding: .2rem;
    font-size: .28rem;
    line-height: .42rem;
    color: #444;
    background: #feece9;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    padding: .2rem;
    li{
      font-size: .24rem;
      width: 33.3%;
      box-sizing: border-box;
      text-align: center;
      margin-bottom: .2rem;
      border-right:1px solid #ccc;
      &:nth-child(3n),&:last-child{
        border-right: none;
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

.slideLeft-enter-active {
  transition: all .3s linear;
}
.slideLeft-leave-active {
  transition: all .3s linear;
}
.slideLeft-enter{
  transform: translateX(100%);
}
.slideLeft-leave-to{
  transform: translateX(-100%);
}
// slideRight
.slideRight-enter-active {
  transition: all .3s linear;
}
.slideRight-leave-active {
  transition: all .3s linear;
}
.slideRight-enter{
  transform: translateX(-100%);
}
.slideRight-leave-to{
  transform: translateX(100%);
}
</style>
