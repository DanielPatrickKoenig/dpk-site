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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
body{
  padding: 0;
  margin:0;
}
#app {
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
