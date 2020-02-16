<template>
  <div id="app">
    <dpk-timeline></dpk-timeline>
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
.echarts-chart{
  margin-left: -15px;
  margin-top: 10px;
} 
.echarts-chart,
.echarts-chart > div,
.echarts-chart > div > div,
.echarts-chart > div > div > canvas{
  width: 320px !important;
  height: 160px !important;
} 
</style>
