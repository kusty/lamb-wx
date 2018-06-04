/*
 * @Author: kusty
 * @Date: 2018-05-12 17:27:32
 * @Last Modified by: kusty
 * @Last Modified time: 2018-06-04 17:43:14
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


  // 获取用户信息
  static async getUserInfo() {
    const user = await Storage.get('user')
    console.log(user)
    return user
  }

  // 微信授权登录
  static async loginByWx({ encryptedData, iv }) {
    try {
      const { code } = await wepy.login()
      const url = `${this.baseUrl}/user/loginByWx`
      const param = {
        code,
        encryptedData,
        iv
      }
      const { token, user } = await this.post(url, param)
      this.saveUser({ user, token })
      return user
    } catch (err) {
      throw new Error(err)
    }
  }

  //保存用户信息到本地
  static saveUser({ user, token }) {
    Storage.set('token', token)
    Storage.set('user', user)
  }
}
