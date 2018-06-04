/*
 * @Author: kusty 
 * @Date: 2018-05-30 16:50:43 
 * @Last Modified by: kusty
 * @Last Modified time: 2018-06-04 17:44:58
 */
import { handleActions } from 'redux-actions'
import { UPDATE_USER, CLEAN_USER, FETCH_USERINFO, LOGIN } from '../types/login'
import _ from 'lodash'

export default handleActions({
  [UPDATE_USER](state, { payload }) {
    return {
      ...state,
      user: {
        ...payload.user
      }
    }
  },
  [CLEAN_USER](state) {
    return {
      ...state,
      user: null
    }
  },
  [FETCH_USERINFO](state, { payload }) {
    let user = null;
    if (!_.isEmpty(payload)) {
      user = { ...payload }
    }
    return {
      ...state,
      user
    }
  },
  [LOGIN](state, { payload }) {
    return {
      ...state,
      user: {
        ...payload
      }
    }
  },
}, {
    user: null,
  })