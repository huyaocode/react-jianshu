import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BackWrapper } from './style'
import { actionCreators } from '../../store/index'

class BackTop extends Component {
  render() {
    const { isShow, bakeToTop } = this.props
    return (
      isShow && (
        <BackWrapper onClick={bakeToTop}>
          <i className="iconfont">&#xe786;</i>
        </BackWrapper>
      )
    )
  }
  componentDidMount() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
  componentWillUnmount() {
    window.scrollTo(0, 0)
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = state => {
  return {
    isShow: state.getIn(['tool', 'showBackTop'])
  }
}
const mapDispatchToState = dispatch => {
  return {
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleBackTopShow(true))
      } else {
        dispatch(actionCreators.toggleBackTopShow(false))
      }
    },
    bakeToTop() {
      window.scrollTo(0, 0)
      dispatch(actionCreators.toggleBackTopShow(false))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToState
)(BackTop)
