import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Detail extends Component {
  render() {
    const {logined } = this.props
    if (logined) {
      return (
        <div>
          <h1>
          写文章页面
          </h1>
          <p>时间有限，不做了。</p>
        </div>
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapStateToProps = state => ({
  logined: state.getIn(['login', 'logined'])
})


export default connect(
  mapStateToProps,
  null
)(Detail)
