import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constains'

const initHomeData = result => ({
  type: constants.INIT_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  witerList: result.witerList
})

export const getAjaxData = () => {
  return dispatch => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      dispatch(initHomeData(result))
    })
  }
}

const addArticleData = (value, nextPage) => ({
  type: constants.ADD_ARTICLE_DATA,
  value: fromJS(value),
  nextPage
})

export const getMoreList = page => {
  return dispatch => {
    axios.get('/api/homeList.json?page=' + page).then(res => {
      const result = res.data.data
      dispatch(addArticleData(result, page + 1))
    })
  }
}
