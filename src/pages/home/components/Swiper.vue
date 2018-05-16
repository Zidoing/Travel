<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [
          {id: '001', imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_750x200_b423f532.jpg"},
          {id: '002', imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg"},
          {id: '003', imgUrl: "http://img1.qunarzz.com/piao/fusion/1805/1e/30472c5c05379a02.jpg_750x200_ff29557c.jpg"},
        ]
      }
    },

  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff

  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 30.25%
    .swiper-img
      width 100%
</style>
