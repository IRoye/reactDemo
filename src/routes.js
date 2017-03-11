import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Account from './Account';


export default(
 
  // 当URL位／时，渲染的是app这个组件
  <Route path="/" component={App} >
  <Route path = "/roye" component={App} />
  <Route path = "/home" component={Home} />
  <Route path = "/about" component={About} />
  <Route path = "/account" component={Account} />
  {/* 这里是默认的*/}
  <IndexRoute component={Home} />
</Route>

);