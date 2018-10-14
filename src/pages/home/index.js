import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommed from './components/Recommed'
import Writer from './components/Writer'
import {BackTop} from '../../common/tools'
import { actionCreators } from './store'
import { HomeWrapper, HomeLeft, HomeRight } from './style.js'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4504/8f6fbad5108d79f95a0af380416da37da8263251.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="封面"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommed />
          <Writer />
        </HomeRight>
        <BackTop/>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.getHomeData()
  }
}

const mapDispathToProps = dispatch => {
  return {
    getHomeData() {
      dispatch(actionCreators.getAjaxData())
    }
  }
}

export default connect(
  null,
  mapDispathToProps
)(Home)
