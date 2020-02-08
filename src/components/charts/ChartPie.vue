<template>
  <div class="pie-chart">
    <svg class="work-charts" :id="chartid" :style="'width:' + size.width + 'px;height:' + size.height + 'px;'">
      <path class="allocation-pie" v-for="(map, i) in renderMap" :key="'path-' + i.toString()" :d="map.d" :fill="map.color"></path>
    </svg>
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
        processedData: []
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
      processData: function () {
        let self = this
        self.$data.processData = []
        let count = 0
        let index = 0
        for (let x in self.chartdata) {
          for (let i = 0; i < self.chartdata[x]; i++) {
            self.$data.processedData.push({label: x, value: count, index: index})
            count++
          }
          index++
        }
        console.log(self.$data.processedData)
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
            {x: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 4) * self.scale, angles.b, 'cos'), y: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 4) * self.scale, angles.b, 'sin')},
            {x: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 4) * self.scale, angles.a, 'cos'), y: self.getOrbit(self.$data.size.width / 2, (self.$data.size.width / 4) * self.scale, angles.a, 'sin')}
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
</style>
