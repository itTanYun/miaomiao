// 封装better-scroll功能组件
<template>
  <div class="wrapper" ref="movie_body">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroller",
  //获取到父组件的方法
  data() {
      return {
          scroll: ''
      }
  },
  props: {
      handleToScroll: {
          type: Function,
          default: function() {}
      },
      handleToTouchEnd: {
          type: Function,
          default: function() {}
      }
  },
  mounted() {
    this.$nextTick(() => {
      var scroll = new BScroll(this.$refs.movie_body, {
        click: true,
        probeType: 1
      });
      this.scroll = scroll;
      scroll.on("scroll", (pos) => {
          this.handleToScroll(pos)
      })
      scroll.on("touchEnd", (pos) => {
          this.handleToTouchEnd(pos)
      })
    });
  },
  methods: {
      toScrollTop(y) {
          this.scroll.scrollTo(0,y);
      }
  }
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>
