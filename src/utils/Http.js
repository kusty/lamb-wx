/*
 * @Author: kusty
 * @Date: 2018-05-10 16:02:43
 * @Last Modified by: kusty
 * @Last Modified time: 2018-06-04 17:18:10
 */
import wepy from 'wepy'

/**
 *
 * Http封装
 * @export
 * @class Http
 */
export default class Http {
  static async request(method, url, data) {
    const param = {
      url: url,
      method: method,
      data: data
    }
    const res = await wepy.request(param)
    if (this.isSuccess(res)) {
      return res.data.body
    } else {
      throw this.handleError(res)
    }
  }

  /**
   *
   *判断是否请求成功
   * @static
   * @param {any} res
   * @returns
   * @memberof Http
   */
  static isSuccess(res) {
    const code = res.statusCode
    if (code !== 200) { return false }
    return !(res.data && res.data.status !== 200)
  }

  /**
   *
   * 错误处理
   * @static
   * @param {any} res
   * @returns
   * @memberof Http
   */
  static handleError(res) {
    const error = {}
    error.statusCode = res.statusCode
    const wxData = res.data
    const serverData = wxData.data
    if (serverData) {
      error.serverCode = wxData.code
      error.message = serverData.message
      error.serverData = serverData
    }
    return error
  }

  static get(url, data, loading = true) {
    return this.request('GET', url, data, loading)
  }

  static put(url, data, loading = true) {
    return this.request('PUT', url, data, loading)
  }

  static post(url, data, loading = true) {
    return this.request('POST', url, data, loading)
  }

  static delete(url, data, loading = true) {
    return this.request('DELETE', url, data, loading)
  }
}
