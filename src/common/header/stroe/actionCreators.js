import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  value: page
})

const changeHotList = (data) => ({
  type: constants.CHANGE_HOT_LIST,
  list: fromJS(data),
  totalPage: Math.ceil(data.length / 10), //每页显示10个
})

export const getHotSearchList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeHotList(data.data))
    }).catch(() => {

    })
  }
}