/*
 * @Author: kusty
 * @Date: 2018-05-15 19:36:26
 * @Last Modified by: kusty
 * @Last Modified time: 2018-05-15 19:42:52
 */
import wepy from 'wepy'
import Base from './Base'

export default class Scenics extends Base {
  /**
   *
   * 登录状态检查
   * @static
   * @memberof Auth
   */
  static async fetchList() {
    const url = `${this.baseUrl}/scenics/list`
    const param = {}
    const data = await this.get(url, param)
    return data
  }
}
