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
.pie-chart{
  margin-left: -150px;
  margin-top: -69px;
} 
.pie-chart,
.pie-chart > div,
.pie-chart > div > div,
.pie-chart > div > div > canvas{
  width: 320px !important;
  height: 160px !important;
} 
</style>
