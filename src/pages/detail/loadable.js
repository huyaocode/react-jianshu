import React from 'react' //用来解析JSX语法
import Loadable from 'react-loadable';

const LoadableBar = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>Loading...</div>
  }
});

export default () => <LoadableBar/>
