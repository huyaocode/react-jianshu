import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { Wrapper, Title, Content } from './style'

class Detail extends Component {
  render() {
    const { title, content } = this.props
    return (
      <Wrapper>
        <Title>{title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </Wrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapStateToProps = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = dispatch => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Detail))
