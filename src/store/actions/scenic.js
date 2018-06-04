/*
 * @Author: kusty 
 * @Date: 2018-06-04 14:48:51 
 * @Last Modified by: kusty
 * @Last Modified time: 2018-06-04 17:18:01
 */
import { FETCH_SCENIC_LIST } from '../types'
import { createAction } from 'redux-actions'
import Scenics from '../../service/Scenics';

export const fetchScenicList = createAction(FETCH_SCENIC_LIST, async () => {
  const data = await Scenics.fetchList();
  return data;
})