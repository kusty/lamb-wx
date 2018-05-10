/*
 * @Author: kusty
 * @Date: 2018-05-10 16:02:43
 * @Last Modified by:   kusty
 * @Last Modified time: 2018-05-10 16:02:43
 */
import wepy from 'wepy'

/**
 * @export
 * @class Http
 * Http封装
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
      return res.data.data
    } else {
      throw this.handleError(res)
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess(res) {
    const wxCode = res.statusCode
    if (wxCode !== 200) {
      return false
    }
    const wxData = res.data
    return !(wxData && wxData.code !== 200)
  }

  /**
   * 异常
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

  static patch(url, data, loading = true) {
    return this.request('PATCH', url, data, loading)
  }

  static delete(url, data, loading = true) {
    return this.request('DELETE', url, data, loading)
  }
}
