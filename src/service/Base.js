import wepy from 'wepy'
import Http from '../utils/Http'
import { baseUrl } from '../config'

export default class Base extends wepy.app {
  static baseUrl = baseUrl;
  static get = Http.get.bind(Http);
  static put = Http.put.bind(Http);
  static post = Http.post.bind(Http);
  static delete = Http.delete.bind(Http);
}
