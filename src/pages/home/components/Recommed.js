import React, { Component } from 'react' 
import { connect } from 'react-redux'
import {
  RecommendWrapper,
  RecommendItem
} from '../style'

class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {
          list.map( (item) => <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>)
        }
      </RecommendWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapStateToProps, null)(Recommend)