<template>
  <div :style="rendergStyle()">
    <div class="inner-dot edu-inner-dot" :style="'z-index:' + (opacity * 5).toString() + ';box-shadow: 0 0 0 ' + (opacity * 3) + 'px #ffffff;background-color:rgba(' + ((1 - opacity) * 255) + ',' + ((1 - opacity) * 255) + ',' + ((1 - opacity) * 255) + ',1);'"></div>
    <div :style="'opacity:' + opacity + ';'" :class="details.side == 'right' ? 'connector right-connector' : 'connector left-connector'"></div>
    <ul v-if="opacity > 0" :style="'opacity:' + opacity + ';'" :class="details.side == 'right' ? 'event-list edu-list right-list' : 'event-list edu-list left-list'">
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
.edu-list > li{
  color: #0000cc;
}
.edu-inner-dot{
  background-color: #0000cc;
}
</style>
