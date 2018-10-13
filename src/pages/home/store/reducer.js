import { fromJS } from 'immutable'
import * as constants from './constains'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  witerList: [],
  articlePage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INIT_HOME_DATA:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
        witerList: action.witerList
      })
    case constants.ADD_ARTICLE_DATA:
    return state.merge({
      articleList: state.get('articleList').concat(action.value),
      articlePage: action.nextPage
    })
    default:
      return state
  }
}
