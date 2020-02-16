<template>
  <div v-if="ready" :id="tlID" class="dpk-timeline-component">
    <div class="left-portion"></div>
    <div class="right-portion"></div>
    <ul class="main-menu">
      <li v-on:click="sectionSelected({year: 1975, month: 0, day: 1}, {year: 2021, month: 0, day: 1}, 'about')">
        About
      </li>
      <li v-on:click="sectionSelected({year: 1998, month: 0, day: 1}, {year: 2012, month: 0, day: 1}, 'experience')">
        Experience
      </li>
      <li v-on:click="sectionSelected({year: 1993, month: 0, day: 1}, {year: 2000, month: 0, day: 1}, 'education')">
        Education
      </li>
    </ul>
    <div class="timeline-line">
        
    </div>
    <marker-timepoint v-for="(marker, i) in events.markers" :key="'marker-' + i.toString()" :year="marker" :start="start" :end="end" :shift="shift"></marker-timepoint>
    <work-timepoint v-for="(work, i) in events.experience" :key="'work-' + i.toString()" :year="work.start" :month="work.month" :start="start" :end="end" :details="work.details" :shift="shift" v-on:point-selected="workPointSelected" :sig="work.id" :opacity="visProps.experience">
      <div class="dpk-timeline-chart" v-if="work.stateVal > 0">
        <div class="work-chart-bg" :style="'opacity:' + work.stateVal.toString() + ';'">
          <div>
            <h2>{{work.details.company}}</h2>
            <p>{{work.details.title}}</p>
            <p>{{work.start.toString()}} - {{work.end > 0 ? work.end.toString() : 'Present'}}</p>
            <dpk-carousel :items="work.details.charts">
              <div v-for="(chart, i) in work.details.charts" :key="'chart-' + i.toString()" :slot="'item-' + i.toString()">
                <h3>
                  {{chart.title}}
                </h3>
                <chart-pie v-if="chart.type === chartTypes.PIE" :style="'opacity:' + work.stateVal.toString() + ';'" :chartdata="chart.data" :colors="colors" textcolor="#333333" title="" hovertitle="" :scale="work.stateVal > .5 ? 1 : work.stateVal * 2"></chart-pie>
                <chart-bar v-if="chart.type === chartTypes.BAR" :style="'opacity:' + work.stateVal.toString() + ';'" :chartdata="chart.data" :colors="colors" textcolor="#333333" title="" hovertitle="" :scale="work.stateVal > .5 ? 1 : work.stateVal * 2"></chart-bar>
                <chart-wordcloud v-if="chart.type === chartTypes.WORDCLOUD" :style="'opacity:' + work.stateVal.toString() + ';'" :chartdata="chart.data" :colors="colors" textcolor="#333333" title="" hovertitle="" :scale="work.stateVal > .5 ? 1 : work.stateVal * 2"></chart-wordcloud>
              </div>
            </dpk-carousel>
            <h3>Accomplishments</h3>
            <ul class="accomplishment-list">
              <li v-for="(a, i) in work.accomplishments" :key="'accomplishment-' + i.toString()" v-html="a">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </work-timepoint>
    <education-timepoint v-for="(edu, i) in events.education" :key="'edu-' + i.toString()" :year="edu.start" :month="edu.month" :start="start" :end="end" :details="edu.details" :shift="shift" v-on:point-selected="eduPointSelected" :sig="edu.id" :opacity="visProps.education">
    </education-timepoint>
  </div>
</template>
<script>
import Timepoint from './Timepoint.vue'
import MarkerTimepoint from './MarkerTimepoint.vue'
import WorkTimepoint from './WorkTimepoint.vue'
import EducationTimepoint from './EducationTimepoint.vue'
import {TweenLite} from 'gsap'
import ChartPie from './charts/ChartPie.vue'
import ChartBar from './charts/ChartBar.vue'
import ChartWordcloud from './charts/ChartWordcloud.vue'
import Utilities from '../utils/Utilities.js'
import WorkEvents from '../utils/WorkEvents.js'
import EducationEvents from '../utils/EducationEvents.js'
import DPKCarousel from './DPKCarousel.vue'
export default {
  components: {
    'timepoint': Timepoint,
    'marker-timepoint': MarkerTimepoint,
    'work-timepoint': WorkTimepoint,
    'education-timepoint': EducationTimepoint,
    'chart-pie': ChartPie,
    'chart-bar': ChartBar,
    'chart-wordcloud': ChartWordcloud,
    'dpk-carousel': DPKCarousel
  },
  data () {
    return {
      tlID: 'tl-' + Math.random().toString().split('.').join('') + '-' + Math.random().toString().split('.').join('') + '-' + Math.random().toString().split('.').join(''),
      events: {
        markers: [],
        experience: WorkEvents,
        education: EducationEvents,
        about: []
      },
      tlHeight: 0,
      start: new Date(),
      end: new Date(),
      ready: false,
      shift: 0,
      colors: Utilities.ChartColors,
      visProps: {
        experience: 0,
        education: 0,
        about: 0
      },
      chartTypes: Utilities.ChartTypes
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
    sectionSelected: function (s, e, type) {
      this.shiftTo(s, e)
      this.activatePoint('experience')
      this.activatePoint('education')
      this.activatePoint('about')
      this.showPoints(type)
    },
    workPointSelected: function (e) {
      let self = this
      self.activatePoint('experience', e.sig)
      self.shiftTo({year: e.year - 2, month: e.month, day: 1}, {year: e.year + 1, month: e.month, day: 1})
    },
    eduPointSelected: function (e) {
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
    },
    showPoints: function (type) {
      let self = this
      switch (type) {
        case 'experience':
        {
          TweenLite.to(self.$data.visProps, 0.5, {experience: 1})
          TweenLite.to(self.$data.visProps, 0.5, {education: 0})
          TweenLite.to(self.$data.visProps, 0.5, {about: 0})
          break
        }
        case 'education':
        {
          TweenLite.to(self.$data.visProps, 0.5, {experience: 0})
          TweenLite.to(self.$data.visProps, 0.5, {education: 1})
          TweenLite.to(self.$data.visProps, 0.5, {about: 0})
          break
        }
        case 'about':
        {
          TweenLite.to(self.$data.visProps, 0.5, {experience: 0})
          TweenLite.to(self.$data.visProps, 0.5, {education: 0})
          TweenLite.to(self.$data.visProps, 0.5, {about: 1})
          break
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

<style lang="scss">
.dpk-timeline-component{
  position: absolute;
  width: 100vw;
  height: auto;
  top: 40px;
  bottom: 0px;
  min-height: 700px;
  overflow: hidden;
  .timeline-line{
    position: absolute;
    top:0;
    left:50%;
    width: 2px;
    background-color: #999999;
    height: 100%;
  }
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
  > li {
    display:inline-block;
    padding:0;
    margin:0;
    width:32%;
    text-align:center;
    > label{
      padding: 4px 6px;
      
    }
  }
}

.dpk-timeline-chart{
  z-index: 10;
  position:relative;
}
.work-chart-bg{
  h3{
    font-size: 16px;
    color: #333333;
  }
  position: absolute;
  width: 320px;
  height: auto;
  left: 0;
  top: 0;
  margin-left: -150px;
  margin-top: -152px;
  background-color: rgba(255,255,255,.9);
  box-shadow: 0 0 0 1px #000000 inset;  
  max-height: 75vh;
  overflow: auto;
  > div{
    width: 286px;
    margin: 0 auto;
    position:relative;
    z-index: 2;
    > h2{
      width: 100%;
      height: 100%;
      border-radius: 200px;
      font-size: 18px;
      color: #333333;
      margin: 16px 0px 3px 0;
      font-weight: bold;
    }
    > p{
      padding: 0;
      margin: 0;
    }
    > ul {
      margin:0;
      padding:0;
      > li{
        display:block;
        margin:0;
      }
    }
    > ul.accomplishment-list{
      margin-top: 0;
      width:100%;
      > li{
        box-shadow: 0 1px 0 rgba(0,0,0,.3) inset;
        padding: 8px 4px;
      }
    }
  }
}
div.left-portion{
  width: 50%;
  left:0;
  top:0;
  bottom:0;
  height:100%;
  position:absolute;
  background-color: #f0f000;
}
div.right-portion{
  width: 50%;
  right:0;
  top:0;
  bottom:0;
  height:100%;
  position:absolute;
  background-color: #f000f0;
}
</style>
