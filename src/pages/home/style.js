import styled from 'styled-components'
/**
 * 页面布局
 */
export const HomeWrapper = styled.main`
  width: 960px;
  overflow: hidden;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  width: 615px;
  margin-top: 30px;
  padding-left: 15px;
  float: left;
  .banner-img {
    width: 615px;
    height: 270px;
    margin-bottom: 35px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  height: 300px;
  float: right;
  padding-right: 10px;
`
/**
 * Topic组件
 */
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding-right: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.a`
  display: inline-block;
  float: left;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin: 0 18px 18px 0;
  height: 32px;
  line-height: 30px;
  background: #f7f7f7;
  box-sizing: border-box;
  overflow: hidden;
  padding-right: 8px;
  img {
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
`
/**
 * List组件
 */
export const ListWrapper = styled.ul``

export const ListItem = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  display: flex;
  img {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 4px;
    margin-left: 20px;
  }
`
export const ListInfo = styled.div`
  flex: 1;
  float: left;
  h3 {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  p {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  border-radius: 20px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`

/**
 * Writer组件
 */
export const WriterWrapper = styled.div``
export const WriterItem = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  img{
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  .name{
    display: inline-block;
    padding-top: 10px;
    margin-left: 3px;
    font-size: 14px;
    cursor: pointer;
  }
  .follow {
    display: inline-block;
    float: right;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
  p{
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
  }
}
`
/**
 * Recommend组件
 */
export const RecommendWrapper = styled.div`
  margin: 25px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
`
