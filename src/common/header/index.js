import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from './stroe'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
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

class Header extends Component {
  render() {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      list,
      logined,
      logOut
    } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <Link to="/">
            <NavItem className="left active">首页</NavItem>
          </Link>
          <NavItem className="left">下载App</NavItem>
          <Link to="/login">
            {logined ? (
              <NavItem className="right" onClick={logOut}>
                退出
              </NavItem>
            ) : (
              <NavItem className="right">登陆</NavItem>
            )}
          </Link>
          <NavItem className="right">
            <i className="iconfont">&#xe607;</i>
          </NavItem>
          <NavSearch>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <SearchInput
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'iconfont zoom focused' : 'iconfont zoom'}>
              &#xe637;
            </i>
            {this.showSearchInfo(focused)}
          </NavSearch>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe645;</i>
              写文章
            </Button>
          </Link>

          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  showSearchInfo(show) {
    const {
      list,
      curPage,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      hanEentered,
      changePage
    } = this.props
    const jsList = list.toJS()
    const pageList = []
    for (
      let i = (curPage - 1) * 10;
      i < jsList.length && i < curPage * 10;
      i++
    ) {
      pageList.push(jsList[i])
    }

    if (show || hanEentered) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                changePage(curPage, totalPage, this.spinIcon)
              }}
            >
              <i
                ref={icon => {
                  this.spinIcon = icon
                }}
                className="iconfont spin"
              >
                &#xe641;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {pageList.map(item => (
              <SearchInfoItem key={item}>{item}</SearchInfoItem>
            ))}
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = state => {
  const header = state.get('header')
  return {
    focused: header.get('focused'),
    list: header.get('list'),
    curPage: header.get('curPage'),
    totalPage: header.get('totalPage'),
    hanEentered: header.get('hanEentered'),
    logined: state.getIn(['login', 'logined'])
  }
}

const mapDispathToProps = dispatch => {
  return {
    handleInputFocus(list) {
      dispatch(actionCreators.searchFocus())
      if (list.size === 0) {
        dispatch(actionCreators.getHotSearchList())
      }
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    changePage(curPage, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      let page = curPage + 1
      if (page > totalPage) {
        page = 1
      }
      dispatch(actionCreators.changePage(page))
    },
    logOut() {
      dispatch(loginActionCreators.changeLogin(false))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header)
