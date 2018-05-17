<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul v-for="item in recommendList" :key="item.id">
      <li class="item border-bottom">
        <div class="item-img-wrapper">
          <img
            :src="item.imgUrl"
            alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    data() {
      return {
        recommendList: [
          {
            id: "001",
            imgUrl: "http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg",
            title: "宋城千古情",
            desc: "杭州美景呀呀呀"
          },
          {
            id: "002",
            imgUrl: "http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg",
            title: "千岛湖深林氧吧",
            desc: "杭州美景呀呀呀"
          },
          {
            id: "003",
            imgUrl: "http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg",
            title: "杭州烂苹果乐园",
            desc: "杭州美景呀呀呀"
          },

        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem

  .item-img-wrapper
    overflow: hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%

  .item-info
    padding .1rem
    min-width 0 /* 增加后才会对超过长度的字体  ellipse */
    .item-title
      line-height .54rem
      font-size .32rem
    .item-desc
      line-height .4rem
      color: #ccc
</style>
