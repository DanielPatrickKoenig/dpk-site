<template>
  <div :style="rendergStyle()">
    <ul :class="details.side == 'right' ? 'work-list right-list' : 'work-list left-list'">
      <li class="company-list-item" v-on:click="onSelected">{{details.company}}</li>
      <li class="title-list-item" v-on:click="onSelected">{{details.title}}</li>
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
      return 'left:50%;width:20px;height:20px;border-radius:20px;position:absolute;background-color:#00ff00;margin-left:-10px;margin-top:-10px;'
    }
  }
}
</script>
<style>
.work-list{
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
.work-list > li{
  display: block;
  margin:0;
  padding: 0;
}
</style>
