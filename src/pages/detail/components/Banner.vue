<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="" class="banner-img">

      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63b;</span>{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        @close="handleBannerClose"
        :imgs="gallaryImgs" v-show="showGallary"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  import FadeAnimation from 'common/fade/Fade'

  export default {
    name: "Banner",
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
    },
    data() {
      return {
        showGallary: false
      }
    },
    components: {
      CommonGallary, FadeAnimation
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true
      },
      handleBannerClose() {
        this.showGallary = false
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
