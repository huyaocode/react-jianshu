import {fromJS} from 'immutable'
import * as constants from './contants'

const defaultState = fromJS({
  showBackTop: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showBackTop', action.value)
    default:
      return state
  }
}