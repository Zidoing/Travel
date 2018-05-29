<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Header from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcon from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios';

  export default {
    name: "Home",
    data() {
      return {
        lastCity: "",
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    computed: {
      ...mapState(['city']),

    },
    components: {
      HomeHeader: Header,
      HomeSwiper: HomeSwiper,
      HomeIcon, HomeRecommend, HomeWeekend
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc);
      },
      getHomeInfoSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          // this.city = res.data.city;
          this.swiperList = res.data.swiperList;
          this.iconList = res.data.iconList;
          this.recommendList = res.data.recommendList;
          this.weekendList = res.data.weekendList;
        }
      }
    },
    mounted() {
      this.getHomeInfo();  // 重新渲染后会 重新获取ajax数据 使用keeplive后就缓存下来
      this.lastCity = this.city
    },
    activated() {
      if (this.lastCity !== this.city) { //重新渲染后会 重新获取ajax数据
        this.getHomeInfo();
      }
    }
  }
</script>

<style scoped>

</style>
