import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constains'

export const changeLogin = (hasLogin) => ({
  type: constants.CHANGE_LOGIN_STATE,
  value: fromJS(hasLogin)
})

export const login = (account, password) => {
  return dispatch => {
    axios
      .get(
        '/api/login.json?account=' +
          account +
          '&password=' +
          password +
          '&shouldPost=butEasyToGet'
      )
      .then(res => {
        const result = res.data.data
        if(result) {
          dispatch(changeLogin(result))
        } else{
          alert('失败！')
        }
      })
  }
}
