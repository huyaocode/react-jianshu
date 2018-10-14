import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
`
export const LoginBox = styled.div`
  width: 300px;
  margin: 100px auto;
`

export const InputBox = styled.div`
  height: 100px;
  text-align: center;
`

export const InputWrapper = styled.div`
  height: 50px;
  background-color: rgb(250, 255, 189);
  border: 1px solid #aaa;
  line-height: 50px;
  input {
    margin-top: 15px;
    width: 240px;
    border: none;
    outline: none;
    background-color: transparent;
  }
  &.id {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &.psw {
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .iconfont {
    margin-right: 10px;
  }
`

export const LogInButton = styled.div`
  width: 300px;
  padding: 9px 18px;
  box-sizing: border-box;
  background-color: #3194d0;
  margin-top: 50px;
  text-align: center;
  border-radius: 25px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`
