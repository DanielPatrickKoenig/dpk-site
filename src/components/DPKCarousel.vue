<template>
  <div class="dpk-carousel">
    <ul :style="'width:' + (items.length * 107) + '%;height:' + carouselHeight + ';margin-left:-' + (position * 107) + '%;'">
      <li v-for="(item, i) in items" :key="'item-' + i.toString()">
        <slot :name="'item-' + i.toString()"></slot>
      </li>
    </ul>
    <a v-if="position > 0" class="left-switch" v-on:click="jump(-1)">L</a>
    <a v-if="position < items.length - 1" class="right-switch" v-on:click="jump(1)">R</a>
  </div>
</template>
<script>
import {TweenLite} from 'gsap'
export default{
  props: ['items', 'height'],
  data () {
    return {
      position: 0,
      carouselHeight: this.height ? this.height.toString() + 'px' : '100%'
    }
  },
  methods: {
    jump: function (dir) {
      let self = this
      let nextVal = dir > 0 ? Math.floor(self.$data.position + dir) : Math.ceil(self.$data.position + dir)
      TweenLite.to(self.$data, 0.5, {position: nextVal})
    }
  }
}
</script>
<style lang="scss" scoped>
div.dpk-carousel {
  /*height: 678px;*/
  width:100%;
  overflow:hidden;
  position:relative;
  > ul{
    margin:0;
    padding:0;
    height:194px;
    > li {
      margin:0;
      padding:0;
      display: inline-block;
    }
  }
  > a{
    position: absolute;
    display:block;
  }
  > a.left-switch{
    top: 10px;
    left: 0;
  }
  > a.right-switch{
    top: 10px;
    right: 0;
  }
}
</style>