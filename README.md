# React 简书网开发

### 技术栈
React + Redux + styled-components

#### styled-components
使用styled-components有以下几个好处:
1. 零件化。每一个导出的其实都是一个有样式的标签，可以方便的被组件使用。
2. 可以像sass等一样嵌套标签
3. 代码分离
4. 避免样式冲突，他不会影响其他组件的样式
5. 方便的为标签添加属性

##### 在styled-components中定义有CSS样式的标签、标签属性
```javascript
export const HeaderWrapper = styled.div.attrs({
  class: 'header'
})`
  height: 58px;
  .somePart{
    color: red;
  }
`
```
##### 在 styled-components 中使用图片
图片必须先使用import导入，因为webpack会帮我们把项目打包
在使用的时候使用字符串插槽，即 ${ } 的方式
```javascript
import logoPic from '../../statics/logo.png'

export const Logo = styled.a`
  width: 100px;
  height: 56px;
  background: url(${logoPic});  
`
```

#### React Transition Group
react-transition-group会在动画执行的不同时间点动态的添加一些class
入场时：
fade-enter
fade-enter-active
离场时：
slide-exit
slide-exit-active

#### 使用combineReducer对数据拆分管理
如果我们将项目中所有的reducer函数都放在一个文件中的话有两个很大的问题：
第一，reducer函数会变得非常长；
第二，所有的reducer放在一起那么合作的成本就会特别高，因为大家都在频繁修改同一文件。

使用combineReducer可以合并多个reducer, 所以与store相连的reducer可以被简化为下面这个样子。
```
import { combineReducers } from 'redux'
import {reducer as headerReducer} from '../common/header/stroe'

export default combineReducers({
  header: headerReducer
})
```
combineReducer 能够使得我们可以将reducer拆分，我们可以把reducer文件放到组件对应文件夹下，让一个组件文件夹就包含了整个组件所有信息。
现在，我们就有能力在一个文件夹内就将组件的全都信息描述完整
```
│  index.js   //容器组件
│  style.js   //CSS样式 (这里使用了styled-components，描述了标签类型、标签的样式、标签原生属性) 
│
└─stroe   //管理数据的文件夹
        index.js            //将actionCreator、reducer、constants导出
        actionCreators.js   //管理action的产生
        constants.js        //管理action类型，把action的type值变成常量
        reducer.js          //管理整个组件涉及到的reducer

```

#### immutable.js
immutable.js是一个第三方的库，它可以帮助我们生成一个immutable对象，这个对象是不可以被改变的。如果将store向reducer传递的state包装成一个immutable对象的话就可以避免直接修改state这种情况的发生。

fromJS可以把对象包装为immutable对象
```
const defaultState = fromJS({
  focused: false
})
```
set方法
immutable对象的set方法会拷贝之前immutable对象的值和设置的新值，返回一个全新的对象，他不会去真的修改原对象。
```
state.set('focused', true);
```
get方法
immutable对象不可以直接使用 “.” 或者 [] 来直接获取对象值，必须通过get方法
```
let focused = header.get('focused')
```
#### redux-immutable
虽然使用了immutable.js让combineReducer拆出来的组件的reducer中的state变成了immutable对象，但是整个项目的store还是一个普通的JS对象，使用redux-immutable就可以让整个store变成一个immutable对象。
我们在直接连接store的reducer中用redux-immutable生成一个combineReducers，用它替换redux自带的combineReducers
```
import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/stroe'

export default combineReducers({
  header: headerReducer
})
```
使用数据：
```
state.getIn(['header','focused'])
//等价于以下代码
state.get('header').get('focused')
```