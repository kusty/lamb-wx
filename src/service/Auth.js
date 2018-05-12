/*
 * @Author: kusty
 * @Date: 2018-05-12 17:27:32
 * @Last Modified by: kusty
 * @Last Modified time: 2018-05-12 22:57:58
 */
import wepy from 'wepy'
import Base from './Base'

/**
 *
 *
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
  static async login() {

  }

  // 微信授权登录
  static async loginByWx() {
    const {code} = await wepy.login()
    const {encryptedData, iv} = await wepy.getUserInfo({
      withCredentials: true,
      lang: 'zh_CN' })
    const url = `${this.baseUrl}/user/loginByWx`
    const param = {
      code,
      encryptedData,
      iv
    }
    const {token, user} = await this.post(url, param)
    console.log(token)
  }
}
