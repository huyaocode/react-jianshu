import { fromJS } from 'immutable'
import * as constants from './constains'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INIT_DETAIL_DATA:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
