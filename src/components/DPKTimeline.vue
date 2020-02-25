<template>
  <div v-if="ready" :id="tlID" class="dpk-timeline-component">
    <h1 class="title-container"><span class="dpk-name">Dan Koenig</span> <span class="division">|</span> Developer&nbsp;&nbsp;</h1>
    <div class="left-portion"></div>
    <div class="right-portion"></div>
    <ul v-if="menuDimensions.margin.left > -250" class="main-menu" :style="'margin-left:' + menuDimensions.margin.left.toString() + 'px;'">
      <li v-on:click="aboutSelected();toggleMenu();">
        About
      </li>
      <li v-on:click="experienceSelected();toggleMenu();">
        Experience
      </li>
      <li v-on:click="educationSelected();toggleMenu();">
        Education
      </li>
      <li class="close-menu-button" v-on:click="toggleMenu()">&lt;</li>
    </ul>
    <div v-if="menuDimensions.margin.left > -250" class="main-menu-blocker" :style="'opacity:' + (0.25 - (menuDimensions.margin.left * -0.001)).toString() + ';'" v-on:click="toggleMenu()"></div>
    <div class="timeline-line">
        
    </div>
    <marker-timepoint v-for="(marker, i) in events.markers" :key="'marker-' + i.toString()" :year="marker" :start="start" :end="end" :shift="shift"></marker-timepoint>
    <work-timepoint v-for="(work, i) in events.experience" :key="'work-' + i.toString()" :year="work.start" :month="work.month" :start="start" :end="end" :details="work.details" :shift="shift" v-on:point-selected="workPointSelected" :sig="work.id" :opacity="visProps.experience">
      <div class="dpk-timeline-chart" v-if="work.stateVal > 0">
        <div class="pod-overlay" :style="'opacity:' + work.stateVal.toString() + ';'" v-on:click="experienceSelected()"></div>
        <div class="section-chart-bg work-chart-bg" :style="'opacity:' + work.stateVal.toString() + ';'"> 
          <div>
            <div>
              <h2>{{work.details.company}}</h2>
              <p>{{work.details.title}}</p>
              <p>{{work.start.toString()}} - {{work.end > 0 ? work.end.toString() : 'Present'}}</p>
              <dpk-carousel :items="work.details.charts" :contentwidth="120" :autoplay="true">
                <div v-for="(chart, i) in work.details.charts" :key="'chart-' + i.toString()" :slot="'item-' + i.toString()">
                  <h3>
                    {{chart.title}}
                  </h3>
                  <chart-pie v-if="chart.type === chartTypes.PIE" :style="'opacity:' + work.stateVal.toString() + ';'" :chartdata="chart.data" :colors="colors" textcolor="#333333" title="" hovertitle="" :scale="work.stateVal > .5 ? 1 : work.stateVal * 2"></chart-pie>
                  <chart-bar v-if="chart.type === chartTypes.BAR" :style="'opacity:' + work.stateVal.toString() + ';'" :chartdata="chart.data" :colors="colors" textcolor="#333333" title="" hovertitle="" :scale="work.stateVal > .5 ? 1 : work.stateVal * 2"></chart-bar>
                  <chart-wordcloud v-if="chart.type === chartTypes.WORDCLOUD" :style="'opacity:' + work.stateVal.toString() + ';'" :chartdata="chart.data" :colors="colors" textcolor="#333333" title="" hovertitle="" :scale="work.stateVal > .5 ? 1 : work.stateVal * 2"></chart-wordcloud>
                </div>
              </dpk-carousel>
            </div>
            <div>
              <h3>Accomplishments</h3>
              <ul class="accomplishment-list">
                <li v-for="(a, i) in work.accomplishments" :key="'accomplishment-' + i.toString()" v-html="a">
                </li>
              </ul>
            </div>
          </div>
          <a class="pod-close-button" v-on:click="experienceSelected()"></a>
        </div>
      </div>
    </work-timepoint>
    <education-timepoint v-for="(edu, i) in events.education" :key="'edu-' + i.toString()" :year="edu.start" :month="edu.month" :start="start" :end="end" :details="edu.details" :shift="shift" v-on:point-selected="eduPointSelected" :sig="edu.id" :opacity="visProps.education">
      <div class="dpk-timeline-chart" v-if="edu.stateVal > 0">
        <div class="pod-overlay" :style="'opacity:' + edu.stateVal.toString() + ';'" v-on:click="educationSelected()"></div>
        <div class="section-chart-bg" :style="'opacity:' + edu.stateVal.toString() + ';'">
          <div>
            <div>
              <h2>{{edu.details.school}}</h2>
              <p>{{edu.details.degree}}</p>
              <p>Graduated {{edu.end.toString()}}</p>
              <img :src="edu.details.logo" />
            </div>
            <div class="padded-div">
              <div v-html="edu.details.summary"></div>
            </div>
          </div>
          <a class="pod-close-button" v-on:click="educationSelected()"></a>
        </div>
      </div>
    </education-timepoint>
    <about-timepoint v-for="(a, i) in events.about" :key="'about-' + i.toString()" :year="a.start" :month="a.month" :start="start" :end="end" :details="a.details" :shift="shift" v-on:point-selected="aboutPointSelected" :sig="a.id" :opacity="visProps.about">
      <div class="dpk-timeline-chart" v-if="a.stateVal > 0">
        <div class="pod-overlay" :style="'opacity:' + a.stateVal.toString() + ';'" v-on:click="aboutSelected()"></div>
        <div class="section-chart-bg" :style="'opacity:' + a.stateVal.toString() + ';'">
          <div class="padded-div">
            <div v-html="a.details.label" class="about-label-div"></div>
            <div v-html="a.details.summary"></div>
          </div>
          <a class="pod-close-button" v-on:click="aboutSelected()"></a>
        </div>
      </div>
    </about-timepoint>
    <div class="menu-button-container" :style="'width:' + menuButtonDimensions.size.width.toString() + 'px;height:' + menuButtonDimensions.size.height.toString() + 'px;left:' + menuButtonDimensions.position.left.toString() + '%;top:' + menuButtonDimensions.position.top.toString() + '%;margin-left:' + menuButtonDimensions.margin.left.toString() + 'px;margin-top:' + menuButtonDimensions.margin.top.toString() + 'px;'">
      <ul v-if="menuButtonDimensions.size.width >= 300">
        <li v-on:click="aboutSelected();shiftMenuButton();">
          About
        </li>
        <li v-on:click="experienceSelected();shiftMenuButton();">
          Experience
        </li>
        <li v-on:click="educationSelected();shiftMenuButton();">
          Education
        </li>
      </ul>
      <img src="src/assets/bars.svg" />
      <div v-if="menuButtonDimensions.size.width < 100" v-on:click="toggleMenu()"></div>
    </div>
  </div>
</template>
<script>
import Timepoint from './Timepoint.vue'
import MarkerTimepoint from './MarkerTimepoint.vue'
import WorkTimepoint from './WorkTimepoint.vue'
import EducationTimepoint from './EducationTimepoint.vue'
import AboutTimepoint from './AboutTimepoint.vue'
import {TweenLite} from 'gsap'
import ChartPie from './charts/ChartPie.vue'
import ChartBar from './charts/ChartBar.vue'
import ChartWordcloud from './charts/ChartWordcloud.vue'
import Utilities from '../utils/Utilities.js'
import WorkEvents from '../utils/WorkEvents.js'
import EducationEvents from '../utils/EducationEvents.js'
import AboutEvents from '../utils/AboutEvents.js'
import DPKCarousel from './DPKCarousel.vue'
export default {
  components: {
    'timepoint': Timepoint,
    'marker-timepoint': MarkerTimepoint,
    'work-timepoint': WorkTimepoint,
    'education-timepoint': EducationTimepoint,
    'about-timepoint': AboutTimepoint,
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
        about: AboutEvents
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
      chartTypes: Utilities.ChartTypes,
      menuButtonDimensions: {
        size: {
          width: 300,
          height: 300
        },
        position: {
          left: 50,
          top: 50
        },
        margin: {
          left: -150,
          top: -150
        }
      },
      menuDimensions: {
        margin: {
          left: -250
        }
      }
    }
  },
  methods: {
    shiftMenuButton: function () {
      let self = this
      TweenLite.to(self.$data.menuButtonDimensions.size, 0.5, {width: 44, height: 44})
      TweenLite.to(self.$data.menuButtonDimensions.position, 0.5, {left: 0, top: 0})
      TweenLite.to(self.$data.menuButtonDimensions.margin, 0.5, {left: 0, top: 0})
    },
    toggleMenu: function () {
      let self = this
      let menuMargin = self.$data.menuDimensions.margin.left < 0 ? 0 : -250
      TweenLite.to(self.$data.menuDimensions.margin, 0.5, {left: menuMargin})
    },
    aboutSelected: function () {
      this.sectionSelected({year: 1972, month: 0, day: 1}, {year: 2021, month: 0, day: 1}, 'about')
    },
    experienceSelected: function () {
      this.sectionSelected({year: 1998, month: 0, day: 1}, {year: 2012, month: 0, day: 1}, 'experience')
    },
    educationSelected: function () {
      this.sectionSelected({year: 1993, month: 0, day: 1}, {year: 2000, month: 0, day: 1}, 'education')
    },
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
      let self = this
      self.activatePoint('education', e.sig)
      self.shiftTo({year: e.year - 2, month: e.month, day: 1}, {year: e.year + 1, month: e.month, day: 1})
    },
    aboutPointSelected: function (e) {
      let self = this
      self.activatePoint('about', e.sig)
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
  top: 0px;
  bottom: 0px;
  min-height: 700px;
  overflow: hidden;
  .timeline-line{
    position: absolute;
    top:0;
    left:50%;
    width: 2px;
    height: 100%;
    background-color: #ffffff;
    margin-left: -.5px;
  }
}
div.main-menu-blocker{
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: #333333;
  z-index: 300;
}
ul.main-menu {
  display:block;
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  width: 250px;
  height:100vh;
  padding:50px 0 0 0;
  margin:0;
  background-color: rgba(255,255,255,.9);
  z-index: 301;
  > li {
    display:block;
    font-weight: bold;
    padding:0;
    margin:0;
    text-align:left;
    padding: 14px 10px 14px 50px;
    box-shadow: 0 -1px 0 rgba(0,0,0,.2);
  }
  > li.close-menu-button{
    position: absolute;
    top: 0;
    right:0;
    padding: 10px;
    font-size: 30px;
    width: 44px;
    height: 44px;
    text-align: right;
    box-shadow: none;
  }
}

.dpk-timeline-chart{
  z-index: 10;
  position:relative;
}
.section-chart-bg{
  z-index: 260;
  a.pod-close-button{
    position:absolute;
    display:inline-block;
    top: 0px;
    right: 6px;
    font-size: 20px;
    color: #ff0000;
  }
  a.pod-close-button::after{
    content: "\2716";
  }
  img{
    padding-top: 20px;
    width: 100%;
  }
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
  margin-top: -210px;
  background-color: rgba(255,255,255,.9);
  box-shadow: 0 0 0 1px #000000 inset;  
  max-height: 75vh;
  min-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  > div{
    width: 286px;
    margin: 0 auto;
    position:relative;
    z-index: 2;
    h2{
      width: 100%;
      height: 100%;
      border-radius: 200px;
      font-size: 18px;
      color: #333333;
      margin: 16px 0px 3px 0;
      font-weight: bold;
    }
    p{
      padding: 0;
      margin: 0;
    }
    ul {
      margin:0;
      padding:0;
      > li{
        display:block;
        margin:0;
      }
    }
    ul.accomplishment-list{
      margin-top: 0;
      width:100%;
      > li{
        box-shadow: 0 1px 0 rgba(0,0,0,.3) inset;
        padding: 8px 4px;
      }
    }
  }
}
/* The animation code */
@keyframes left-transition {
  0%  {background-color: #DB166C;}
  10% {background-color: #B558A2;}
  20% {background-color: #1F8B95;}
  30% {background-color: #5E79BB;}
  40% {background-color: #5A6571;}
  50% {background-color: #5E79BB;}
  60% {background-color: #EB7523;}
  70% {background-color: #432256;}
  80% {background-color: #2bb3cd;}
  90% {background-color: #66342d;}
  100% {background-color: #DB166C;}
}

@keyframes right-transition {
  0%  {background-color: #8fc23e;}
  10% {background-color: #fdbe40;}
  20% {background-color: #dc527d;}
  30% {background-color: #7d8f9e;}
  40% {background-color: #9a605b;}
  50% {background-color: #dc1c4a;}
  60% {background-color: #50b86b;}
  70% {background-color: #1f8b95;}
  80% {background-color: #eb7523;}
  90% {background-color: #2276bb;}
  100% {background-color: #8fc23e;}
}

/* The element to apply the animation to */
// div {
//   width: 100px;
//   height: 100px;
//   background-color: red;
//   animation-name: left-transition;
//   animation-duration: 4s;
// }
div.left-portion{
  width: 50%;
  left:0;
  top:0;
  bottom:0;
  height:100%;
  position:absolute;
  background-color: #DB166C;
  animation-name: left-transition;
  animation-duration: 100s;
  animation-iteration-count: infinite;
}
div.right-portion{
  width: 50%;
  right:0;
  top:0;
  bottom:0;
  height:100%;
  position:absolute;
  background-color: #8fc23e;
  animation-name: right-transition;
  animation-duration: 100s;
  animation-iteration-count: infinite;
}
.connector{
  position: absolute;
  top: 9px;
  width: 16px;
  height: 1px;
  background-color: #ffffff;
}
.left-connector{
  margin-left: 16px;
  top: 10px;
}
.right-connector{
  margin-left: -11px;
}
div.dpk-carousel{
  height: 251px;
  overflow: visible !important;
  > ul{
    > li{
      margin:0 38px 0 0 !important;
    }
  }
  > a {
    top: 210px !important;
    font-size: 20px;
    width: 40px;
    height: 32px;
    display: inline-block;
    text-align: center;
    border-radius: 40px;
    box-shadow: 0 0 0 1px #999999 inset;
    padding-top: 8px;
  }
  > div.dpk-carousel-marker-container{
    bottom: 13px !important;
  }
}
.inner-dot{
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 5px;
  margin: 5px;
  box-shadow: 0 0 0 1px #ffffff;
}

.event-list{
  position: absolute;
  width: 120px;
  display:inline-block;
  top: 10px;
  left: 10px;
  margin:0;
  padding: 0;
  margin-top: -18px;
  box-shadow: 0 0 0 1px #ffffff inset;
  border-radius: 5px;
  background-color: rgba(255,255,255,.85);
  
}
.left-list{
  margin-left: 20px;
}
.right-list{
  margin-left: -140px;
}
.event-list > li{
  display: block;
  margin:0;
  padding: 4px;
  font-size:12px;
}
.event-list > li:first-child{
  padding-bottom:0;
  font-weight:bold;
}
.event-list > li:last-child{
  padding-top:0;
}
div.pod-overlay{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0,0,0,.3);
}
.padded-div{
  padding: 10px 0;
}
div.menu-button-container{
  position: fixed;
  z-index: 210;
  > img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
  }
  > div{
    position: absolute;
    top:0;
    right:0;
    left: 0;
    bottom:0;

  }
  > ul {
    margin:79px 0 0 0;
    padding:0;
    width: 100%;
    position: relative;
    z-index: 220;
    > li{
      display:block;
      width: 100%;
      padding:5px;
      margin:0 0 30px 0;
      text-align: center;
      color: #333333;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
}
h1.title-container{
  position: fixed;
  z-index: 1;
  color: rgba(255,255,255,.8);
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  right: 0;
  height: 34px;
  padding: 11px 8px 0 0;
  margin: 0;
  font-size: 14px;
  text-align: center;
  > span.dpk-name {
    font-weight: bold;
    color: rgba(255,255,255,.8);
  }
  > span.division{
    opacity: 0;
  }
}
@media screen and (min-width: 350px) {
  h1.title-container{
    font-size: 20px;
    
  }
}
@media screen and (min-width: 700px) {
  .section-chart-bg{
    width: 700px;
    margin-left: -340px;
    > div{
      width: auto;
      max-height: 400px;
      margin: 0;
      
      > div{
        display:inline-block;
        float: left;
        
      }
      > div:first-child{
        overflow: hidden;
        max-width: 286px;
        padding: 0 10px;
      }
      > div:last-child{
        padding-left: 10px;
        max-width: 350px;
        max-height: 340px;
        overflow-y: auto;
        box-shadow: -1px 0 0 rgba(0,0,-0,.3);
      }
    }
  }
}
@media screen and (min-width: 1000px) {
  .section-chart-bg.work-chart-bg{
    width: 1000px;
    margin-left: -490px;
    min-height: 650px;
    box-shadow: 0 0 0 1px #000000 inset, -395px 0 0 rgba(255,355,255, 1) inset, -396px 0 0 rgba(0,0,0, 0.1) inset;
    > div{
      > div:first-child{
        overflow: visible;
        width: 300px;
        
        > h2, p{
          padding-left: 11px;
          font-weight:bold;
          font-size: 20px;
        }
        > h2 {
          font-size: 30px;
        }
      }
      > div:last-child{
        max-width: 580px;
        min-width: 580px;
        max-height: 540px;
        margin-left: -295px;
        margin-top: 116px;
        box-shadow: none;
      }
    }
  }
  div.dpk-carousel{
    height: 251px;
    overflow: visible !important;
    > ul{
      margin: 0 !important;
      right: -640px !important;
      position: absolute;
      width: 286px !important;
      top: -75px;
      > li{
        display:block !important;
      }
      > li:not(:last-child){
        margin-bottom: 50px !important;
      }
      
    }
    .right-switch{
      display:none !important;
    }
    .left-switch{
      display:none !important;
    }
    .dpk-carousel-marker-container{
      display:none;
    }
  }
}

@media screen and (min-width: 1400px) {
  .section-chart-bg.work-chart-bg{
    width: 1400px;
    margin-left: -690px;
    min-height: 756px;
    overflow: hidden;
    > div{
      > div:last-child{
        max-width: 960px;
        min-width: 960px;
        max-height: 540px;
      }
    }
  }
  div.dpk-carousel{
    height: 251px;
    overflow: visible !important;
    > ul{
      margin: 0 !important;
      right: -1025px !important;
      position: absolute;
      width: 286px !important;
      top: -75px;
      > li{
        display:block !important;
      }
      
    }
    .right-switch{
      display:none !important;
    }
    .left-switch{
      display:none !important;
    }
    .dpk-carousel-marker-container{
      display:none;
    }
  }
}

</style>
<style>
div.about-label-div > span{
  font-size: 286px;
  color: rgba(0,0,0,.2);
}
</style>
