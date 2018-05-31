import { FETCH_USERINFO } from '../types'
import { createAction } from 'redux-actions'
import Auth from '../../service/Auth';

export const getUserInfo = createAction(FETCH_USERINFO, async () => {
  console.log('a')
  return await Auth.getUserInfo()
})