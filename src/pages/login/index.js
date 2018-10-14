import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import { Wrapper, LoginBox, InputBox, InputWrapper, LogInButton } from './style'

class Detail extends Component {
  render() {
    const { login, logined } = this.props

    if (!logined) {
      return (
        <Wrapper>
          <LoginBox>
            <InputBox>
              <InputWrapper className="id">
                <i className="iconfont">&#xe789;</i>
                <input
                  type="text"
                  placeholder="账号"
                  ref={input => (this.account = input)}
                />
              </InputWrapper>
              <InputWrapper className="psw">
                <i className="iconfont">&#xe621;</i>
                <input
                  type="password"
                  placeholder="密码"
                  ref={psw => (this.password = psw)}
                />
              </InputWrapper>
            </InputBox>
            <LogInButton onClick={() => login(this.account, this.password)}>
              登陆
            </LogInButton>
          </LoginBox>
        </Wrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapStateToProps = state => ({
  logined: state.getIn(['login', 'logined'])
})

const mapDispatchToProps = dispatch => {
  return {
    login(accountElement, passwordElement) {
      dispatch(
        actionCreators.login(accountElement.value, passwordElement.value)
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
