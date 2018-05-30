import wepy from 'wepy'
import Auth from '../service/Auth'
import { imgUrl, imgMode } from '../config'
export default class base extends wepy.mixin {
  loaded() {
    this.$apply()
  }

  data = {
    imgUrl: imgUrl,
    imgMode: imgMode,
  }

  methods = {

  }

}
