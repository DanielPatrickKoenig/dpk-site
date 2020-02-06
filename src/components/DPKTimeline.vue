<template>
  <div v-if="ready" :id="tlID" class="dpk-timeline-component">
    <span style="font-size:90px;" v-on:click="shiftTest">{{tlHeight}}</span>
    <div class="timeline-line">
        
    </div>
    <!-- <timepoint year="2006" month="1" day="1" :start="start" :end="end"></timepoint>
    <timepoint year="1985" month="1" day="1" :start="start" :end="end"></timepoint>
    <timepoint year="2000" month="1" day="1" :start="start" :end="end"></timepoint>
    <timepoint year="2016" month="1" day="1" :start="start" :end="end"></timepoint> -->
    <marker-timepoint v-for="(marker, i) in events.markers" :key="'marker-' + i.toString()" :year="marker" :start="start" :end="end" :shift="shift"></marker-timepoint>
    <work-timepoint v-for="(work, i) in events.experience" :key="'work-' + i.toString()" :year="work.start" :month="work.month" :start="start" :end="end" :details="work.details" :shift="shift"></work-timepoint>
  </div>
</template>
<script>
import Timepoint from './Timepoint.vue'
import MarkerTimepoint from './MarkerTimepoint.vue'
import WorkTimepoint from './WorkTimepoint.vue'
import {TweenLite} from 'gsap'
export default {
  components: {
    'timepoint': Timepoint,
    'marker-timepoint': MarkerTimepoint,
    'work-timepoint': WorkTimepoint
  },
  data () {
    return {
      tlID: 'tl-' + Math.random().toString().split('.').join('') + '-' + Math.random().toString().split('.').join('') + '-' + Math.random().toString().split('.').join(''),
      events: {
        markers: [],
        experience: [
          {start: 1999, end: 2001, month: 5, company: 'Lighten Coleman', title: 'Art Director', details: {side: 'right', company: 'Lighten Coleman', title: 'Art Director'}},
          {start: 2001, end: 2002, month: 4, company: 'Asylum', title: 'Designer', details: {company: 'Asylum', title: 'Designer'}},
          {start: 2002, end: 2003, month: 3, company: 'Asa', title: 'Designer', details: {side: 'right', company: 'ASA', title: 'Designer'}},
          {start: 2003, end: 2004, month: 2, company: 'Brio', title: 'Art Director', details: {company: 'Brio', title: 'Art Director'}},
          {start: 2004, end: 2005, month: 3, company: 'Ford', title: 'Flash Developer', details: {side: 'right', company: 'Ford', title: 'Flash Developer'}},
          {start: 2005, end: 2006, month: 6, company: 'NCMS', title: 'Flash Developer', details: {company: 'NCMS', title: 'Flash Developer'}},
          {start: 2006, end: 2007, month: 1, company: 'Duffy Petrosky', title: 'Sr. Art Director', details: {side: 'right', company: 'Duffy Petrosky', title: 'Sr. Art Director'}},
          {start: 2007, end: 2009, month: 1, company: 'Organic', title: 'Sr. Engineer', details: {company: 'Organic', title: 'Sr. Engineer'}},
          {start: 2009, end: 2010, month: 1, company: 'Enlighten', title: 'Software Engineer', details: {side: 'right', company: 'Enlighten', title: 'Software Engineer'}},
          {start: 2010, end: 2010, month: 1, company: 'Concept Facgtory', title: 'Software Developer', details: {company: 'Concept Facgtory', title: 'Software Developer'}},
          {start: 2010, end: -1, month: 4, company: 'Gongos', title: 'Sr. Developer', details: {side: 'right', company: 'Gongosn', title: 'Sr. Developer'}}
        ],
        education: [],
        about: []
      },
      tlHeight: 0,
      start: new Date(),
      end: new Date(),
      ready: false,
      shift: 0
    }
  },
  methods: {
    shiftTest: function (e) {
      let self = this
      self.shiftTo(1998, 2013)
    },
    shiftTo: function (s, e) {
      let self = this
      let ends = {start: self.$data.start.getFullYear(), end: self.$data.end.getFullYear()}
      TweenLite.to(ends, 0.5, {
        start: s,
        end: e,
        onUpdate: function (_ends, _self) {
          _self.$data.start.setFullYear(_ends.start)
          _self.$data.end.setFullYear(_ends.end)
          _self.$data.shift = Math.random()
        },
        onUpdateParams: [ends, self]
      })
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

<style lang="scss" scoped>
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
</style>
