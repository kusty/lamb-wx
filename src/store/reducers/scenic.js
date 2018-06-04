/*
 * @Author: kusty 
 * @Date: 2018-05-30 16:50:43 
 * @Last Modified by: kusty
 * @Last Modified time: 2018-06-04 15:19:10
 */
import { handleActions } from 'redux-actions'
import { FETCH_SCENIC_LIST } from '../types'

export default handleActions({
  [FETCH_SCENIC_LIST](state, action) {
    console.log(action.payload)
    return {
      ...state,
      scenic: action.payload
    }
  }
}, {
    scenic: { list: ['123'] },
  })