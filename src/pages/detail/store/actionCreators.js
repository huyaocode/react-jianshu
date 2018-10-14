import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constains'

const initDeailData = res => ({
  type: constants.INIT_DETAIL_DATA,
  title: fromJS(res.title),
  content: fromJS(res.content)
})

export const getDetail = (id) => {
  return dispatch => {
    axios.get('/api/detail.json?id=' + id).then(res => {
      const result = res.data.data
      dispatch(initDeailData(result))
    })
  }
}