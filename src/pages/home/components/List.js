import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListWrapper, ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'

class List extends Component {
  render() {
    console.log('list render')
    const { list, getMoreList, page } = this.props
    return (
      <ListWrapper>
        {list.map((item, index) => {
          return (
            <Link to={'/detail'} key={index}>
              <ListItem>
                <ListInfo>
                  <h3>{item.get('title')}</h3>
                  <p>{item.get('desc')}</p>
                </ListInfo>
                {item.get('imgUrl') && (
                  <img alt="img" src={item.get('imgUrl')} />
                )}
              </ListItem>
            </Link>
          )
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
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

const mapDispatchToProps = dispatch => {
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
