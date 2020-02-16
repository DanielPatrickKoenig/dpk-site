<template>
  <div :style="rendergStyle()">
    <div class="edu-inner-dot"></div>
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
  extends: BaseTimepoint
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
.edu-inner-dot{
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 5px;
  margin: 5px;
  background-color: #0000cc;
}
</style>
