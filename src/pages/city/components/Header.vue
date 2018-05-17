<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'

  .header
    position relative
    height $headerHeight
    line-height $headerHeight
    text-align center
    color: #fff
    background $bgColor
    overflow: hidden
    font-size .32rem
    .header-back
      top: 0
      left 0
      position absolute
      width .64rem
      text-align center
      font-size .4rem
      color #fff


</style>
