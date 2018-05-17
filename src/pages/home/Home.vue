<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <HomeRecommend></HomeRecommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
  import Header from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcon from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'

  export default {
    name: "Home",
    components: {
      HomeHeader: Header,
      HomeSwiper: HomeSwiper,
      HomeIcon, HomeRecommend,HomeWeekend
    }
  }
</script>

<style scoped>

</style>
