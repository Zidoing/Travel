<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="出入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasList">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: "Search",
    props: {
      cities: Object
    },
    data() {
      return {
        keyword: "",
        list: [],
        timer: null
      }
    },
    computed: {
      hasList() {
        return !this.list.length
      }
    },
    watch: {
      keyword() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = [];
          return
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.search)
    }
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

  .search-content
    z-index: 1
    overflow hidden
    position: absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background: #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      background-color #fff
      color: #666


</style>
