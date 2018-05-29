<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="" alt="" class="banner-img">

      <div class="banner-info">
        <div class="banner-title">大连生涯海洋世界</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63b;</span>39
        </div>
      </div>
    </div>
    <common-gallary
      @close="handleBannerClose"
      :imgs="imgs" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'

  export default {
    name: "Banner",
    data() {
      return {
        imgs: [],
        showGallary: false
      }
    },
    components: {
      CommonGallary,
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true
      },
      handleBannerClose() {
        this.showGallary=false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    background-color: red
    .banner-img
      width 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)) //渐变效果
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        margin-top .14rem
        font-size .24rem
        padding: 0 .4rem
        line-height: .4rem
        height: .32rem
        border-radius .2rem
        background-color: rgba(0, 0, 0, 0.8)
        .banner-icon
          font-size .24rem
</style>
