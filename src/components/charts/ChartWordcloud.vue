<template>
  <div class="echarts-chart">
    <div v-bind:id="chartid"></div>
  </div>
</template>
<script>
  import BaseChart from './BaseChart.js'
  require('echarts-wordCloud')
  export default {
    extends: BaseChart,
    methods: {
      buildChart: function (co) {
        let self = this
        var _data = []
        var _values = []
        var _keys = []
        for (var k in self.chartdata) {
          _keys.push(k)
          _values.push(self.chartdata[k])
          _data.push({name: k, value: self.chartdata[k]})
        }
        var option = {
          tooltip: {},
          title: {
            text: ''
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          series: [{
            type: 'wordCloud',
            gridSize: 3,
            sizeRange: [15, 55],
            rotationRange: [-45, 45],
            shape: 'pentagon',
            width: 600,
            height: 400,
            textStyle: {
              normal: {
                color: function (n) {
                  return self.colors[n.dataIndex]
                },
                emphasis: {
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              }
            },
            data: _data
          }]
        }
        co.setOption(option)
      }
    }
  }
</script>
