<template>
  <div :style="rendergStyle()">
    {{year}}
  </div>
</template>
<script>
import BaseTimepoint from './BaseTimepoint.js'
export default {
  extends: BaseTimepoint,
  methods: {
    getExtraStyle: function () {
      return 'left:0;width:100%;height:30px;position:absolute;box-shadow:0 -1px 0 rgba(255, 255, 255, .5);opacity:.4;color:rgba(255, 255, 255, .5);'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
