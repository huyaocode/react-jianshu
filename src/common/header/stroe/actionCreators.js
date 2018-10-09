import * as constants from './constants'

export const changeSearchFocus = (hasFocus) => ({
  type: constants.CHANGE_SEARCH_FOCUS,
  value: hasFocus
})