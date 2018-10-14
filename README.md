# React 简书网开发

### 技术栈

React + Redux + styled-components

#### styled-components

使用 styled-components 有以下几个好处:

1. 零件化。每一个导出的其实都是一个有样式的标签，可以方便的被组件使用。
2. 可以像 sass 等一样嵌套标签
3. 代码分离
4. 避免样式冲突，他不会影响其他组件的样式
5. 方便的为标签添加属性

##### 在 styled-components 中定义有 CSS 样式的标签、标签属性

```javascript
export const HeaderWrapper = styled.div.attrs({
  class: 'header'
})`
  height: 58px;
  .somePart {
    color: red;
  }
`
```

##### 在 styled-components 中使用图片

图片必须先使用 import 导入，因为 webpack 会帮我们把项目打包
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

react-transition-group 会在动画执行的不同时间点动态的添加一些 class
入场时：
fade-enter
fade-enter-active
离场时：
slide-exit
slide-exit-active

#### 使用 combineReducer 对数据拆分管理

如果我们将项目中所有的 reducer 函数都放在一个文件中的话有两个很大的问题：
第一，reducer 函数会变得非常长；
第二，所有的 reducer 放在一起那么合作的成本就会特别高，因为大家都在频繁修改同一文件。

使用 combineReducer 可以合并多个 reducer, 所以与 store 相连的 reducer 可以被简化为下面这个样子。

```
import { combineReducers } from 'redux'
import {reducer as headerReducer} from '../common/header/stroe'

export default combineReducers({
  header: headerReducer
})
```

combineReducer 能够使得我们可以将 reducer 拆分，我们可以把 reducer 文件放到组件对应文件夹下，让一个组件文件夹就包含了整个组件所有信息。
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

#### 定义一个事件需要做那几步？

1. 在组件上挂载某事件的回调函数（在 render 函数入口处使用解构运算符结构出这个函数）
2. 在 mapDispatchToProps 中定义对应的函数
3. 在 constants.js 中定义一个变量作为 aciton 的 type
4. 在 actionCreators 中定义一个的 action。
5. 在 mapDispatchToProps 中的函数中 dispatch 这个 action (这一步熟练后课合并到第二步)
6. 在 reducer 的 switch 语句中添加对这个 action 的处理

#### immutable.js

immutable.js 是一个第三方的库，它可以帮助我们生成一个 immutable 对象，这个对象是不可以被改变的。如果将 store 向 reducer 传递的 state 包装成一个 immutable 对象的话就可以避免直接修改 state 这种情况的发生。

fromJS 可以把对象包装为 immutable 对象

```
const defaultState = fromJS({
  focused: false
})
```

set 方法
immutable 对象的 set 方法会拷贝之前 immutable 对象的值和设置的新值，返回一个全新的对象，他不会去真的修改原对象。

```
state.set('focused', true);
```

get 方法
immutable 对象不可以直接使用 “.” 或者 [] 来直接获取对象值，必须通过 get 方法

```
let focused = header.get('focused')
```

#### redux-immutable

虽然使用了 immutable.js 让 combineReducer 拆出来的组件的 reducer 中的 state 变成了 immutable 对象，但是整个项目的 store 还是一个普通的 JS 对象，使用 redux-immutable 就可以让整个 store 变成一个 immutable 对象。
我们在直接连接 store 的 reducer 中用 redux-immutable 生成一个 combineReducers，用它替换 redux 自带的 combineReducers

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

**immutable 中将数据设置为异步数据**
使用 fromJS 函数处理过的 state 对象是 immutable 对象，而异步请求获得的数据为普通的 JS 对象。
所以直接在把异步数据提交到 reducer 中希望创建新的 state 的时候就会出问题。
所以，我们需要将异步数据也先用 formJS 把它转为 immutable 对象后在交给 reduer 函数。这一点需要注意

immutable 向数组中添加元素
使用 concat 方法

```
state.set('articleList', state.get('articleList').concat(action.value))
```

**merge 方法**
merge 方法可以更方便的一次性合并多个属性，并且合并的内容可以是原生的 JS 对象，而 set 方法在修改对象的时候必须要求心传入的值是 immutable 对象

#### react-router-dom

使用 react-router-dom 来配置路由
文档地址：[https://reacttraining.com/react-router/web/example/basic](https://reacttraining.com/react-router/web/example/basic)

```javascript
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header /> {/*这里是一直出现在页面中的header部分*/}
          <BrowserRouter>
            {' '}
            {/*这里是根据路由显示的router部分*/}
            <div>
              {' '}
              {/*exact表示完全匹配，不加这个的话 /detail 中也能匹配到/，就会让其他页面都展示出header */}
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}
```

#### PureComponent

为了提升页面性能，我们每次都在组件中使用 shouldComponentUpdata 来判断组件是否需要更新，但是这样的代码是很重复的，所以我们引入 PureCompoent 来简化这个操作
