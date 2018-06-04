/*
 * @Author: kusty 
 * @Date: 2018-05-30 16:50:43 
 * @Last Modified by: kusty
 * @Last Modified time: 2018-06-04 15:01:53
 */
import { handleActions } from 'redux-actions'
import { UPDATE_USER, CLEAN_USER, FETCH_USERINFO } from '../types/login'

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
  },
  [FETCH_USERINFO](state, action) {
    console.log(state);
    console.log(action)
    return {
      ...state,
    }
  }
}, {
    user: null,
  })