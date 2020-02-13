// import {TweenLite} from 'gsap'
export default {
  props: ['year', 'month', 'day', 'details', 'start', 'end', 'sig', 'shift', 'opacity'],
  data () {
    return {
      date: null,
      top: 0,
      followTop: 0,
      pointYear: this.year
    }
  },
  watch: {
    shift: function () {
      let self = this
      self.redrawPoint()
    }
  },
  methods: {
    processDate: function () {
      let self = this
      let _date = new Date()
      let _year = self.$data.pointYear !== undefined ? self.$data.pointYear : new Date().getFullYear()
      let _month = self.month !== undefined ? self.month : 0
      let _day = self.day !== undefined ? self.day : 1
      _date.setFullYear(_year)
      _date.setMonth(_month)
      _date.setDate(_day)
      self.$data.date = _date
    },
    calculateRatio: function () {
      let self = this
      let mils = self.$data.date.getTime()
      // console.log(mils)
      self.$data.top = 1 - ((mils - self.start.getTime()) / (self.end.getTime() - self.start.getTime()))
      // console.log(1 - self.$data.top)
    },
    rendergStyle: function () {
      let self = this
      return 'top:' + (self.$data.followTop * 100).toString() + '%;' + self.getExtraStyle()
    },
    getExtraStyle: function () {
      return 'left:50%;width:20px;height:20px;position:absolute;background-color:#cc0000;margin-left:-10px;margin-top:-10px;'
    },
    redrawPoint: function () {
      let self = this
      self.processDate()
      self.calculateRatio()
    },
    perpetuate: function (_self) {
      let self = this
      setInterval(function () {
        self.$data.followTop += (self.$data.top - self.$data.followTop) / 5
      }, 33)
      // let n = {a: 0}
      // TweenLite.to(n, 1, {
      //   a: 1,
      //   onComplete: _self.perpetuate,
      //   onCompleteParams: [_self],
      //   onUpdade: function (__self) {
      //     __self.$data.followTop += (__self.$data.top - __self.$data.followTop) / 5
      //   },
      //   onUpdateParams: [_self]
      // })
    },
    onSelected: function () {
      let self = this
      self.$emit('point-selected', {year: self.year, month: self.month, details: self.details, sig: self.sig})
    }
  },
  mounted: function () {
    let self = this
    self.redrawPoint()
    window.addEventListener('resize', function (e) {
      self.calculateRatio()
    })
    self.perpetuate(self)
  }
}
