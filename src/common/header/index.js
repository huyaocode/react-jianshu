import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './stroe'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInput,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  Button
} from './style.js'

const Header = props => {
  const { focused, handleInputFocus } = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe607;</i>
        </NavItem>
        <NavSearch>
          <CSSTransition timeout={200} in={focused} classNames="slide">
            <SearchInput
              className={focused ? 'focused' : ''}
              onFocus={() => {
                handleInputFocus(true)
              }}
              onBlur={() => {
                handleInputFocus(false)
              }}
            />
          </CSSTransition>
          <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe637;</i>
          <SearchInfo>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <div>
              <SearchInfoItem>未来</SearchInfoItem>
              <SearchInfoItem>区块链</SearchInfoItem>
              <SearchInfoItem>前端</SearchInfoItem>
              <SearchInfoItem>故事</SearchInfoItem>
              <SearchInfoItem>招聘</SearchInfoItem>
              <SearchInfoItem>优秀</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
            </div>
          </SearchInfo>
        </NavSearch>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe645;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = state => {
  const header = state.get('header')
  return {
    focused: header.get('focused')
  }
}

const mapDispathToProps = dispatch => {
  return {
    handleInputFocus(hasFocus) {
      dispatch(actionCreators.changeSearchFocus(hasFocus))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header)
