import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListWrapper, ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'

class List extends Component {
  render() {
    const { list,getMoreList, page } = this.props
    return (
      <ListWrapper>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <ListInfo>
                <h3>{item.get('title')}</h3>
                <p>{item.get('desc')}</p>
              </ListInfo>
              {item.get('imgUrl') && <img alt="img" src={item.get('imgUrl')} />}
            </ListItem>
          )
        })}
        <LoadMore onClick={() => getMoreList(page)}>
          更多文字
        </LoadMore>
      </ListWrapper>
    )
  }
}
const mapStateToProps = state => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
