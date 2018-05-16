<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
  </div>
</template>

<script>
  import Header from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcon from './components/Icons'

  export default {
    name: "Home",
    components: {
      HomeHeader: Header,
      HomeSwiper: HomeSwiper,
      HomeIcon,
    }
  }
</script>

<style scoped>

</style>
