<template>
  <div :style="rendergStyle()">
    <div class="work-inner-dot"></div>
    <div :style="'opacity:' + opacity + ';'" :class="details.side == 'right' ? 'connector right-connector' : 'connector left-connector'"></div>
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
  margin-top: -18px;
  box-shadow: 0 0 0 1px #ffffff inset;
  border-radius: 5px;
  background-color: rgba(255,255,255,.85);
  color: #0000a0;
  
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
  padding: 4px;
  font-size:12px;
}
.work-list > li:first-child{
  padding-bottom:0;
  font-weight:bold;
}
.work-list > li:lastt-child{
  padding-top:0;
}
.work-inner-dot{
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 5px;
  margin: 5px;
  background-color: #0000a0;
  box-shadow: 0 0 0 1px #ffffff;
}
</style>
