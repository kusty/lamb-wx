import wepy from 'wepy'

export default class base extends wepy.mixin {
  loaded() {
    this.$apply()
  }
  methods = {
    tap() {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }
}
