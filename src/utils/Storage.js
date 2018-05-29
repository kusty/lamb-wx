/*
 * @Author: kusty
 * @Date: 2018-05-29 13:14:01
 * @Last Modified by: kusty
 * @Last Modified time: 2018-05-29 15:28:42
 */

import wepy from 'wepy'

export default class Storage {
  static async has(key) {
    const value = await this.get(key)
    return value !== null && value !== ''
  }

  static async get(key) {
    return await wepy.getStorageSync(key)
  }

  static async set(key, value) {
    await wepy.setStorage({ key: key, data: value })
  }

  static async delete(key) {
    await wepy.removeStorage({ key: key })
  }
}
