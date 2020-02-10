<template>
  <div v-if="ready" :id="tlID" class="dpk-timeline-component">
    <ul class="main-menu">
      <li v-on:click="sectionSelected({year: 1975, month: 0, day: 1}, {year: 2021, month: 0, day: 1})">
        About
      </li>
      <li v-on:click="sectionSelected({year: 1998, month: 0, day: 1}, {year: 2012, month: 0, day: 1})">
        Experience
      </li>
      <li v-on:click="sectionSelected({year: 1993, month: 0, day: 1}, {year: 2000, month: 0, day: 1})">
        Education
      </li>
    </ul>
    <div class="timeline-line">
        
    </div>
    <marker-timepoint v-for="(marker, i) in events.markers" :key="'marker-' + i.toString()" :year="marker" :start="start" :end="end" :shift="shift"></marker-timepoint>
    <work-timepoint v-for="(work, i) in events.experience" :key="'work-' + i.toString()" :year="work.start" :month="work.month" :start="start" :end="end" :details="work.details" :shift="shift" v-on:point-selected="workPointSelected" :sig="work.id">
      <div class="dpk-timeline-chart" v-if="work.stateVal > 0">
        <div class="work-chart-bg" :style="'opacity:' + work.stateVal.toString() + ';'">
          <div>
            <h3>{{work.details.company}}</h3>
            <p>{{work.details.title}}</p>
            <p>{{work.start.toString()}} - {{work.end > 0 ? work.end.toString() : 'Present'}}</p>
            <ul>
              <li v-for="(a, i) in work.accomplishments" :key="'accomplishment-' + i.toString()">
                {{a}}
              </li>
            </ul>
          </div>
        </div>
        <chart-pie :style="'opacity:' + work.stateVal.toString() + ';'" :chartdata="work.details.chart" :colors="colors" textcolor="#333333" title="" hovertitle="" :scale="work.stateVal > .5 ? 1 : work.stateVal * 2"></chart-pie>
      </div>
    </work-timepoint>
  </div>
</template>
<script>
import Timepoint from './Timepoint.vue'
import MarkerTimepoint from './MarkerTimepoint.vue'
import WorkTimepoint from './WorkTimepoint.vue'
import {TweenLite} from 'gsap'
import ChartPie from './charts/ChartPie.vue'
import Utilities from '../utils/Utilities.js'
import WorkEvents from '../utils/WorkEvents.js'
export default {
  components: {
    'timepoint': Timepoint,
    'marker-timepoint': MarkerTimepoint,
    'work-timepoint': WorkTimepoint,
    'chart-pie': ChartPie
  },
  data () {
    return {
      tlID: 'tl-' + Math.random().toString().split('.').join('') + '-' + Math.random().toString().split('.').join('') + '-' + Math.random().toString().split('.').join(''),
      events: {
        markers: [],
        experience: WorkEvents,
        education: [],
        about: []
      },
      tlHeight: 0,
      start: new Date(),
      end: new Date(),
      ready: false,
      shift: 0,
      colors: Utilities.ChartColors
    }
  },
  methods: {
    shiftTest: function (e) {
      let self = this
      self.shiftTo(1998, 2013)
    },
    shiftTo: function (s, e) {
      let self = this
      console.log(s)
      console.log(e)
      let ends = {start: self.$data.start.getFullYear(), end: self.$data.end.getFullYear(), sm: self.$data.start.getMonth(), sd: self.$data.start.getDate(), em: self.$data.end.getMonth(), ed: self.$data.end.getDate()}
      TweenLite.to(ends, 0.5, {
        start: s.year,
        end: e.year,
        sm: s.month,
        sd: s.day,
        em: e.month,
        ed: e.day,
        onUpdate: function (_ends, _self) {
          console.log(_ends)
          _self.$data.start.setFullYear(_ends.start)
          _self.$data.start.setMonth(_ends.sm)
          _self.$data.start.setDate(_ends.sd)
          _self.$data.end.setFullYear(_ends.end)
          _self.$data.end.setMonth(_ends.em)
          _self.$data.end.setDate(_ends.ed)
          _self.$data.shift = Math.random()
        },
        onUpdateParams: [ends, self]
      })
    },
    sectionSelected: function (s, e) {
      this.shiftTo(s, e)
      this.activatePoint('experience')
      this.activatePoint('education')
      this.activatePoint('about')
    },
    workPointSelected: function (e) {
      let self = this
      self.activatePoint('experience', e.sig)
      self.shiftTo({year: e.year - 2, month: e.month, day: 1}, {year: e.year + 1, month: e.month, day: 1})
    },
    activatePoint: function (type, sig) {
      let self = this
      for (let i = 0; i < self.$data.events[type].length; i++) {
        if (self.$data.events[type][i].id === sig) {
          TweenLite.to(self.$data.events[type][i], 1, {stateVal: 1})
        } else {
          TweenLite.to(self.$data.events[type][i], 1, {stateVal: 0})
        }
      }
    }
  },
  mounted: function () {
    let self = this
    self.$data.start.setFullYear(1975)
    self.$data.start.setMonth(0)
    self.$data.start.setDate(1)
    setInterval(function () {
      self.$data.tlHeight = document.getElementById(self.$data.tlID).getBoundingClientRect().height
    }, 100)
    self.$data.ready = true
    let n = 1975
    while (n <= self.$data.end.getFullYear()) {
      self.$data.events.markers.push(n)
      n += 5
    }
  }
}
</script>

<style>
.dpk-timeline-component{
  position: absolute;
  width: 100vw;
  height: auto;
  top: 40px;
  bottom: 0px;
  min-height: 700px;
  overflow: hidden;
}
.dpk-timeline-component .timeline-line{
  position: absolute;
  top:0;
  left:50%;
  width: 2px;
  background-color: #999999;
  height: 100%;
}
ul.main-menu {
  display:block;
  position:fixed;
  top:0;
  left:0;
  right:0;
  width: 100vw;
  height:40px;
  padding:0;
  margin:0;
}

ul.main-menu > li {
  display:inline-block;
  padding:0;
  margin:0;
  width:32%;
  text-align:center;
}

ul.main-menu > li > label{
  padding: 4px 6px;
  
}
.dpk-timeline-chart{
  z-index: 10;
  position:relative;
}
.work-chart-bg{
  position: absolute;
  width: 320px;
  height: auto;
  left: 0;
  top: 0;
  margin-left: -150px;
  margin-top: -112px;
  background-color: rgba(255,255,255,.9);
  box-shadow: 0 0 0 1px #000000 inset;  
}
.work-chart-bg > div{
  width: 286px;
  margin: 0 auto;
}
.work-chart-bg > div > h3{
    width: 100%;
    height: 100%;
    border-radius: 200px;
    font-size: 16px;
    color: #999;
    margin: 16px 0px 3px 0;
}
.work-chart-bg > div > p{
  padding: 0;
  margin: 0;
}
.work-chart-bg > div > ul{
  margin-top: 230px;
}
</style>
