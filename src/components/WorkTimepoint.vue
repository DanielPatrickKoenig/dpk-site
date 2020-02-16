<template>
  <div :style="rendergStyle()">
    <div class="work-inner-dot"></div>
    <ul v-if="opacity > 0" :style="'opacity:' + opacity + ';'" :class="details.side == 'right' ? 'work-list right-list' : 'work-list left-list'">
      <li class="company-list-item" v-on:click="onSelected">{{details.company}}</li>
      <li class="title-list-item" v-on:click="onSelected">{{details.title}}</li>
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
.work-inner-dot{
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 5px;
  margin: 5px;
  background-color: #cc0000;
}
</style>
