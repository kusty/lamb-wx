/*
 * @Author: kusty
 * @Date: 2018-05-12 17:27:32
 * @Last Modified by: kusty
 * @Last Modified time: 2018-05-31 11:30:31
 */
import wepy from 'wepy'
import Base from './Base'
import Storage from '../utils/Storage'

/**
 * @export
 * @class Auth
 * @extends {Base}
 */
export default class Auth extends Base {
  /**
   *
   * 登录状态检查
   * @static
   * @memberof Auth
   */

  // 检查登录状态
  static async checkLogin() {
    return await Storage.has('user')
  }
  // 获取用户信息
  static async getUserInfo() {
    return await Storage.get('user')
  }
  // 微信授权登录
  static async loginByWx({ encryptedData, iv }) {
    try {
      const { code } = await wepy.login()
      console.log(code)
      const url = `${this.baseUrl}/user/loginByWx`
      const param = {
        code,
        encryptedData,
        iv
      }
      const { token, user } = await this.post(url, param)
      Storage.set('token', token)
      Storage.set('user', user)
      return user
    } catch (err) {
      console.log(err)
      throw new Error(err)
    }
  }
}
