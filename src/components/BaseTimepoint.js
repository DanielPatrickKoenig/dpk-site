export default {
  props: ['year', 'month', 'day', 'details', 'start', 'end', 'shift'],
  data () {
    return {
      date: null,
      top: 0,
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
      console.log(mils)
      self.$data.top = 1 - ((mils - self.start.getTime()) / (self.end.getTime() - self.start.getTime()))
      console.log(1 - self.$data.top)
    },
    rendergStyle: function () {
      let self = this
      return 'top:' + (self.$data.top * 100).toString() + '%;' + self.getExtraStyle()
    },
    getExtraStyle: function () {
      return 'left:50%;width:20px;height:20px;position:absolute;background-color:#cc0000;margin-left:-10px;margin-top:-10px;'
    },
    redrawPoint: function () {
      let self = this
      self.processDate()
      self.calculateRatio()
    }
  },
  mounted: function () {
    let self = this
    self.redrawPoint()
    window.addEventListener('resize', function (e) {
      self.calculateRatio()
    })
  }
}
