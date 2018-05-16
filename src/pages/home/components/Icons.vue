<template>
  <div class="icons">
    <swiper>

      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>


    </swiper>
  </div>
</template>

<script>
  export default {
    name: "Icons",
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        iconList: [
          {id: "001", imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png", desc: "景点门票中华美食街"},
          {id: "002", imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png", desc: "Q+精选"},
          {id: "003", imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png", desc: "西湖"},
          {id: "004", imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png", desc: "千岛湖"},
          {id: "005", imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png", desc: "西溪湿地"},
          {id: "006", imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png", desc: "印象西湖"},
          {id: "007", imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png", desc: "宋城千古情"},
          {id: "008", imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png", desc: "漂流"},
          {id: "009", imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png", desc: "横店喜剧节"},
        ]
      }
    },
    computed: {
      pages() {
        const pages = [];
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  @import "~styles/mixins.styl"

  .icons >>> .swiper-container
    overflow hidden
    height 0
    padding-bottom 50%

  .icons
    width 100%
    height 0
    overflow hidden
    padding-bottom 50%

  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      .icon-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      bottom 0
      left 0
      right 0
      line-height .44rem
      height .44rem
      color: $darkTextColor
      text-align center
      ellipsis()


</style>
