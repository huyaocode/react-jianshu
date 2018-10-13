import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component {
  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {topicList.map(item => (
            <TopicItem key={item.get('title')}>
              <img alt="img" src={item.get('imgUrl')} />
              {item.get('title')}
            </TopicItem>
          )
        )}
      </TopicWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

export default connect(
  mapStateToProps,
  null
)(Topic)
