<template>
  <div>
    <div class="title">热销推荐</div>
    <ul v-for="item in list" :key="item.id">
      <router-link tag="li"
                   :to="'/detail/' + item.id"
                   class="item border-bottom">
        <div class="item-img-wrapper">
          <img
            :src="item.imgUrl"
            alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {list: Array},
    name: "Recommend",
    data() {
      return {
        recommendList: [
          {
            id: "001",
            imgUrl: "http://img1.qunarzz.com/sight/p0/1412/be/c788f0f3767d2ea037b9b66d2010bfa4.water.jpg_200x200_ead93bcd.jpg",
            title: "宋城千古情",
            desc: "杭州美景呀呀呀"
          },
          {
            id: "002",
            imgUrl: "http://img1.qunarzz.com/sight/p0/201406/24/e2a5766e6e81793b2b518a7a08812a4a.jpg_200x200_66ce1370.jpg",
            title: "千岛湖深林氧吧",
            desc: "杭州美景呀呀呀"
          },
          {
            id: "003",
            imgUrl: "http://img1.qunarzz.com/sight/p0/1801/66/665b245a7ca8728a3.img.jpg_200x200_88d144ad.jpg",
            title: "杭州烂苹果乐园",
            desc: "杭州美景呀呀呀"
          },
          {
            id: "004",
            imgUrl: "http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg",
            title: "G20峰会",
            desc: "杭州美景呀呀呀"
          },
          {
            id: "005",
            imgUrl: "http://img1.qunarzz.com/sight/p0/201408/14/771e7f0a85ca13b12c3fde0f7739440f.jpg_200x200_5e08c104.jpg",
            title: "杭州乐园",
            desc: "杭州美景呀呀呀"
          },
          {
            id: "006",
            imgUrl: "http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg",
            title: "杭州海底世界",
            desc: "杭州美景呀呀呀"
          },
          {
            id: "007",
            imgUrl: "http://img1.qunarzz.com/sight/p0/1603/e6/e646f4221574cc2a90.water.jpg_200x200_d9b6cabd.jpg",
            title: "双溪漂流",
            desc: "杭州美景呀呀呀"
          },
          {
            id: "008",
            imgUrl: "http://img1.qunarzz.com/sight/p0/1804/3c/3c1d865ea3175504a3.img.jpg_200x200_8844d692.jpg",
            title: "千岛湖",
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

  .item
    overflow: hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex-grow: 1
      padding .1rem
      min-width 0 /* 增加后才会对超过长度的字体  ellipse */
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color: #ccc
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color: #fff

</style>
