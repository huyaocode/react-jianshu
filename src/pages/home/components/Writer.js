import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterItem } from '../style'

class Writer extends Component {
  render() {
    const { list, numFilter } = this.props
    return (
      <WriterWrapper>
        {list.map(item => (
          <WriterItem key ={item.get('id')}>
            <img alt="" src={item.get('imgUrl')} />
            <div>
              <div className="name">{item.get('name')}</div>
              <div className="follow">+关注</div>
            </div>
            <p>
              写了
              {numFilter(item.get('writeNum'))}字 ·{' '}
              {numFilter(item.get('star'))}
              喜欢
            </p>
          </WriterItem>
        ))}
      </WriterWrapper>
    )
  }
}
const mapStateToProps = state => {
  return {
    list: state.getIn(['home', 'witerList'])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    numFilter(num) {
      if (num > 1000) {
        num = parseInt(num / 1000)
        num = num + 'k'
      }
      return num
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Writer)
