/*
 * @Author: kusty 
 * @Date: 2018-05-30 16:50:43 
 * @Last Modified by: kusty
 * @Last Modified time: 2018-05-30 23:05:58
 */
import { handleActions } from 'redux-actions'
import { UPDATE_USER, CLEAN_USER } from '../types/login'

export default handleActions({
  [UPDATE_USER](state, action) {
    return {
      ...state,
      user: action.payload
    }
  },
  [CLEAN_USER](state, action) {
    return {
      ...state,
      user: null
    }
  }
}, {
    user: null,
  })