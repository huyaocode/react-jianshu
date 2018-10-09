import * as constants from './constants'
import { fromJS } from 'immutable'

//通过下面的方式，可以把对象包装为immutable对象
const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  const {type} = action;
  console.log(action)
  if(type === constants.CHANGE_SEARCH_FOCUS) {
    //immutable对象的set方法会拷贝之前immutable对象的值
    //和设置的新值，然后返回一个全新的对象，他不会去真的修改原对象。
    return state.set('focused', action.value);
  }
  return state;
}