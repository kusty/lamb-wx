/*
 * @Author: kusty 
 * @Date: 2018-06-04 14:49:04 
 * @Last Modified by: kusty
 * @Last Modified time: 2018-06-04 17:44:48
 */
import { FETCH_USERINFO, LOGIN } from '../types'
import { createAction } from 'redux-actions'
import Auth from '../../service/Auth';

export const getUserInfo = createAction(FETCH_USERINFO, async () => {
  return await Auth.getUserInfo();
})

export const login = createAction(LOGIN, async (data) => {
  return await Auth.loginByWx(data);
})