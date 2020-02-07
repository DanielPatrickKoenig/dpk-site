<template>
  <div id="app">
    <dpk-timeline :shift="0" :sy="startYear" :ey="endYear"></dpk-timeline>
  </div>
</template>

<script>
import DPKTimeline from './components/DPKTimeline.vue'
export default {
  name: 'app',
  components: {
    'dpk-timeline': DPKTimeline
  },
  data () {
    return {
    }
  }
}
</script>

<style>
body{
  padding: 0;
  margin:0;
  font-family: Arial;
}
#app {
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
