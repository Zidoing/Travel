<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="出入城市名或拼音">
  </div>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"

  .search
    height .7rem
    padding: 0 .1rem
    background $bgColor
    .search-input
      width 100%
      height: .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
      padding 0 .1rem
      /* 用于处理输入框 内部右边显示过界的问题 */
      box-sizing border-box


</style>
