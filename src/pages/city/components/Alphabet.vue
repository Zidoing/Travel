<template>
  <ul class="list">
    <li
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      class="item" v-for="item of letters" :key="item"
      :ref="item"
    >{{item}}
    </li>

  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object
    },
    computed: {
      letters() {
        const letters = [];
        for (let i  in this.cities) {
          letters.push(i);
        }
        return letters
      }
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated() {
      this.startY = this.$refs['A'][0].offsetTop;
    },
    methods: {
      handleLetterClick(e) {
        this.$emit("change", e.target.innerText);
        console.log(e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        // 提高网页性能，减少执行频率
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79;
            const index = Math.floor((touchY - this.startY) / 20);
            console.log(index);
            if (index >= 0 && index <= this.letters.length) {
              this.$emit('change', this.letters[index]);
            }
          }, 16)
        }
      },
      handleTouchEnd() {

      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    display: flex
    flex-direction column
    justify-content center
    position: absolute
    right 0
    top 1.58rem
    bottom 0
    width: .4rem
    .item
      line-height .44rem
      text-align center
      color $bgColor

</style>
