<template>
  <div :style="rendergStyle()">
    <ul v-if="opacity > 0" :style="'opacity:' + opacity + ';'" :class="details.side == 'right' ? 'edu-list right-list' : 'edu-list left-list'">
      <li class="company-list-item" v-on:click="onSelected">{{details.school}}</li>
      <li class="title-list-item" v-on:click="onSelected">{{details.degree}}</li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
import BaseTimepoint from './BaseTimepoint.js'
export default {
  extends: BaseTimepoint,
  methods: {
    getExtraStyle: function () {
      return 'left:50%;width:10px;height:10px;border-radius:20px;position:absolute;background-color:#00ff00;margin-left:-5px;margin-top:-5px;'
    }
  }
}
</script>
<style>
.edu-list{
  position: absolute;
  width: 120px;
  display:inline-block;
  top: 10px;
  left: 10px;
  margin:0;
  padding: 0;
  
}
.left-list{
  margin-left: 20px;
}
.right-list{
  margin-left: -140px;
}
.edu-list > li{
  display: block;
  margin:0;
  padding: 0;
}
</style>
