<template>
  <div class="pie-chart">
    <div v-bind:id="chartid"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data () {
      return {
        message: 'sup dude',
        chartid: 'CHART_' + Math.random().toString().split('.').join('') + Math.random().toString().split('.').join('') + Math.random().toString().split('.').join(''),
        chartObject: undefined
      }
    },
    props: ['chartdata', 'colors', 'textcolor', 'title', 'hovertitle'],
    methods: {
      buildChart: function () {
        var self = this
        if (document.getElementById(self.$data.chartid) !== undefined) {
          var _data = []
          var _values = []
          var _keys = []
          console.log(self.chartdata)
          for (var k in self.chartdata) {
            _keys.push(k)
            _values.push(self.chartdata[k])
            _data.push({name: k, value: self.chartdata[k]})
          }
          var option = {
            title: {
              text: self.title,
              textStyle: {
                color: self.textcolor
              },
              x: 'left'
            },
            color: self.colors,
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            // legend: {
            //   orient: 'vertical',
            //   x: 'left',
            //   y: 'center',
            //   data: _keys,
            //   textStyle: {
            //     color: self.textcolor
            //   }
            // },
            series: [
              {
                name: self.hovertitle,
                type: 'pie',
                radius: ['50%', '70%'],
                selectedMode: 'single',
                clockwise: true,
                label: {
                  normal: {
                    textStyle: {
                      fontSize: 12,
                      color: self.textcolor
                    }
                  }
                },
                labelLine: {
                  normal: {
                    lineStyle: {
                      color: self.textcolor
                    }
                  }
                },
                data: _data
              }
            ]
          }
          console.log(self.$data.chartObject)
          self.$data.chartObject.setOption(option)
        }
      }
    },
    mounted: function () {
      var self = this
      self.$data.chartObject = echarts.init(document.getElementById(self.$data.chartid))
      setTimeout(function () {
        self.buildChart()
      }, 1000)
    }
  }
</script>
