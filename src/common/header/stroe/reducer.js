import * as constants from './constants'
import { fromJS } from 'immutable'

//通过下面的方式，可以把对象包装为immutable对象
const defaultState = fromJS({
  focused: false,
  list: [],
  curPage: 1,
  totalPage: 1,
  hanEentered: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.MOUSE_ENTER:
      return state.set('hanEentered', true)
    case constants.MOUSE_LEAVE:
      return state.set('hanEentered', false)
    case constants.CHANGE_PAGE:
      return state.set('curPage', action.value)
    case constants.CHANGE_HOT_LIST:
      return state.merge({
        list: action.list,
        totalPage: action.totalPage
      })
    default:
      return state
  }
}
