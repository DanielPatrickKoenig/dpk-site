<template>
  <div class="pie-chart">
    <ul class="bar-chart" :style="'opacity:' + scale + ';'">
      <li v-for="(n, i) in barMatrix" :key="'bar-' + i.toString()">
        <div :style="'width:' + ((n.value / barMax) * 100).toString() + '%;background-color:' + colors[colors.length - 1] + ';'">
        </div>
        <span>{{n.label}}</span>
      </li>
    </ul>
    <svg class="work-charts" :id="chartid" :style="'width:' + size.width + 'px;height:' + size.height + 'px;'">
      <path :style="'opacity:' + scale + ';'" :d="getLegendStub()" class="bar-legend-stub"></path>
      <path class="allocation-pie" v-for="(map, i) in renderMap" :key="'path-' + i.toString()" :d="map.d" :fill="map.color"></path>
      <path :style="'opacity:' + scale + ';'" :d="getBarStub()" class="bar-chart-stub"></path>
    </svg>
    <ul class="pie-legend" :style="'opacity:' + scale + ';'">
      <li v-for="(n, i) in legendColors" :key="'legend-item-' + i.toString()" :style="'box-shadow: 20px 0 0 ' + n.color + ' inset;'">
        {{n.label}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        message: 'sup dude',
        chartid: 'CHART_' + Math.random().toString().split('.').join('') + Math.random().toString().split('.').join('') + Math.random().toString().split('.').join(''),
        chartObject: undefined,
        renderMap: [],
        size: {width: 200, height: 200},
        processedData: [],
        legendColors: [],
        barMatrix: [],
        barMax: 0
      }
    },
    props: ['chartdata', 'colors', 'textcolor', 'title', 'hovertitle', 'scale'],
    watch: {
      scale: function () {
        let self = this
        self.render()
      }
    },
    methods: {
      getBarStub: function () {
        let self = this
        let points = [
          {x: self.$data.size.width * 0.75, y: self.$data.size.height * 0.25},
          {x: self.$data.size.width * 0.9, y: self.$data.size.height * 0.25},
          {x: self.$data.size.width * 0.9, y: self.$data.size.height * 0.75},
          {x: self.$data.size.width * 0.75, y: self.$data.size.height * 0.75}
        ]
        let arch = ' A ' + (self.$data.size.width / 2.8).toString() + ' ' + (self.$data.size.height / 2.8).toString() + ' 1 0 0 ' + points[0].x.toString() + ' ' + points[0].y.toString()
        return 'M ' + points[0].x.toString() + ' ' + points[0].y.toString() + ' L ' + points[1].x.toString() + ' ' + points[1].y.toString() + ' L ' + points[2].x.toString() + ' ' + points[2].y.toString() + ' L ' + points[3].x.toString() + ' ' + points[3].y.toString() + arch + ' Z'
      },
      getLegendStub: function () {
        let self = this
        let points = [
          {x: self.$data.size.width * 0.6, y: self.$data.size.height * 0.25},
          {x: self.$data.size.width * -0.25, y: self.$data.size.height * 0.25},
          {x: self.$data.size.width * -0.25, y: self.$data.size.height * 0.75},
          {x: self.$data.size.width * 0.6, y: self.$data.size.height * 0.75}
        ]
        let arch = ' A ' + (self.$data.size.width / 3.7).toString() + ' ' + (self.$data.size.height / 3.7).toString() + ' 1 0 0 ' + points[0].x.toString() + ' ' + points[0].y.toString()
        return 'M ' + points[0].x.toString() + ' ' + points[0].y.toString() + ' L ' + points[1].x.toString() + ' ' + points[1].y.toString() + ' L ' + points[2].x.toString() + ' ' + points[2].y.toString() + ' L ' + points[3].x.toString() + ' ' + points[3].y.toString() + arch + ' Z'
      },
      processData: function () {
        let self = this
        self.$data.processData = []
        self.$data.legendColors = []
        self.$data.barMatrix = []
        let count = 0
        let index = 0
        let x = null
        let i = 0
        for (x in self.chartdata.pie) {
          self.$data.legendColors.push({label: x, color: self.colors[index]})
          for (i = 0; i < self.chartdata.pie[x]; i++) {
            self.$data.processedData.push({label: x, value: count, index: index})
            count++
          }
          index++
        }
        let highest = -1000000
        for (x in self.chartdata.bar) {
          self.$data.barMatrix.push({label: x, value: self.chartdata.bar[x]})
          if (self.chartdata.bar[x] > highest) {
            highest = self.chartdata.bar[x]
          }
        }
        self.$data.barMax = highest
        console.log(self.$data.barMatrix)
      },
      render: function () {
        let self = this
        self.$data.renderMap
        self.$data.renderMap = []
        let knotches = 180
        for (let i = 0; i < knotches; i++) {
          // console.log(Math.ceil((i / knotches) * 99))
          let index = Math.ceil((i / knotches) * 99)
          let angles = {a: (360 / knotches) * i, b: (360 / knotches) * (i + 1)}
          let points = [
            {x: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 3) * self.scale, angles.a, 'cos'), y: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 3) * self.scale, angles.a, 'sin')},
            {x: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 3) * self.scale, angles.b, 'cos'), y: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 3) * self.scale, angles.b, 'sin')},
            {x: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 3.5) * self.scale, angles.b, 'cos'), y: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 3.5) * self.scale, angles.b, 'sin')},
            {x: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 3.5) * self.scale, angles.a, 'cos'), y: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 3.5) * self.scale, angles.a, 'sin')}
          ]
          self.$data.renderMap.push({d: 'M ' + points[0].x.toString() + ' ' + points[0].y.toString() + ' L ' + points[1].x.toString() + ' ' + points[1].y.toString() + ' L ' + points[2].x.toString() + ' ' + points[2].y.toString() + ' L ' + points[3].x.toString() + ' ' + points[3].y.toString() + ' Z', color: self.colors[self.$data.processedData[index].index]})
        }
      },
      getDistance: function (x1, y1, x2, y2) {
        let distx = x2 - x1
        let disty = y2 - y1
        return Math.sqrt(Math.pow(distx, 2) + Math.pow(disty, 2))
      },
      getAngle: function (x1, y1, x2, y2) {
        let distx = x2 - x1
        let disty = y2 - y1
        let masterdist = getDistance(x1, y1, x2, y2)
        let primary_anglex = distx / masterdist
        let anglex = Math.asin(primary_anglex) * 180 / Math.PI
        let primary_angley = disty / masterdist
        let angley = Math.asin(primary_angley) * 180 / Math.PI
        let resultVal
        if (disty < 0) {
          resultVal = anglex
        } else if (disty >= 0 && distx >= 0) {
          resultVal = angley + 90
        } else if (disty >= 0 && distx < 0) {
          resultVal = (angley * -1) - 90
        }
        return resultVal
      },
      getOrbit: function (_center, _radius, _angle, orbitType) {
        let _num1 = _center
        let _num2 = _radius
        let _num3 = _angle
        let theCent = _num1
        let radius = _num2
        let angle = _num3 - 90
        let ot = orbitType
        let resultVal
        if (ot == "cos") {
          resultVal = theCent + (Math.cos((angle) * (Math.PI / 180)) * radius)
        }
        if (ot == "sin") {
          resultVal = theCent + (Math.sin((angle) * (Math.PI / 180)) * radius)
        }
        return resultVal
      }
    },
    mounted: function () {
      this.processData()
      this.render()
      // let self = this
    }
  }
</script>
<style>
svg.work-charts{
    position:absolute;
    top:10px;
    left:10px;
    margin-left:-100px;
    margin-top:-100px;
}
svg.work-charts > path.allocation-pie{
}
ul.pie-legend {
    padding: 0 0 0 4px;
    margin:-37px 0 0 -138px;
    width:120px;
    position:absolute;
}
ul.pie-legend > li{
    display:block;
    margin: 2px 0 0 0;
    padding: 2px 0 0 25px;
    font-size:12px;
}
ul.bar-chart{
    padding: 0;
    margin: -40px 0 0 92px;
    width: 66px;
    position: absolute;
}
ul.bar-chart > li{
    display:block;
    margin:0 0 1px 0;
    padding:0;
    height:19px;
    position:relative;
    font-size:12px;
    background-color: #dddddd;
}
ul.bar-chart > li > div {
    height:100%;
    position:absolute;
    opacity: .6;
}
ul.bar-chart > li > span {
    position:relative;
    display:block;
    padding: 3px;
}
svg.work-charts{
    overflow: visible;
}
svg.work-charts > path.bar-chart-stub{
    fill:rgba(0,0,0,0.2);
}
svg.work-charts > path.bar-legend-stub{
    fill:rgba(0,0,0,0.1);
}
</style>
