import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/stroe'

export default combineReducers({
  header: headerReducer
})
