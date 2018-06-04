/*
 * @Author: kusty 
 * @Date: 2018-06-04 14:49:04 
 * @Last Modified by:   kusty 
 * @Last Modified time: 2018-06-04 14:49:04 
 */
import { FETCH_USERINFO } from '../types'
import { createAction } from 'redux-actions'
import Auth from '../../service/Auth';

export const getUserInfo = createAction(FETCH_USERINFO, async () => {
  const data = await Auth.getUserInfo();
  console.log('abc：' + data)
  return data;
})