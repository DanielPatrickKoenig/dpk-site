<template>
  <div :style="rendergStyle()">
    <div class="inner-dot about-inner-dot"></div>
    <div :style="'opacity:' + opacity + ';'" :class="details.side == 'right' ? 'connector right-connector' : 'connector left-connector'"></div>
    <ul v-if="opacity > 0" :style="'opacity:' + opacity + ';'" :class="details.side == 'right' ? 'event-list about-list right-list' : 'event-list about-list left-list'">
      <li class="company-list-item" v-on:click="onSelected" v-html="details.label"></li>
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
.about-list{
  width: 64px;
  margin-top:-26px;
}
.about-list.right-list{
  margin-left:-85px;
}
.about-list > li{
  color: #0000cc;
  width: 60px;
  
}
.about-list > li > span{
  font-size: 56px;
}
.about-inner-dot{
  background-color: #00cc00;
}
</style>
