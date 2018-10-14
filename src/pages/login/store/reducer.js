import { fromJS } from 'immutable'
import * as constants from './constains'

const defaultState = fromJS({
  logined: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN_STATE: 
     return state.set('logined', action.value)
    default:
      return state
  }
}
