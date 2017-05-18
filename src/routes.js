import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import About from './about';
import Account from './Account';
import Yanting from './Yanting';
import ShowCourse from './ShowCourse';
import { Provider } from 'react-redux';
import store, { history } from './store';
import Postlist from './PostList';
import Post from './Post';
import NewPost from './NewPost';
// import EditPost from './EditPost';

export default(
  // 当URL位／时，渲染的是app这个组件
  // 每一个<Route>对应了一个react组件, 用app作为布局文件, 
  // 让其包含 home, about, account 子组件
  <Route path="/" component={App} >
     <Route path = "/home" component={Home} />
     <Route path = "/about" component={Yanting} />
     <Route path = "/account" component={Account} />
     <Route path = "/posts" component={Postlist} />
     {/* IndexRoute 的作用就是 渲染默认的组件， 在渲染完最默认的组件  APP之后， 就
     开始渲染Home 这个组件 */}
     <IndexRoute component={Home} />
     <Route path = "/view/:courseId" component={ShowCourse} />
     <Route path = "/post/new" component={NewPost} />
     {/* 查看一篇文章 */}
     <Route path = "/post/:_id" component={Post} />
     {/* 编辑一篇文章  */}
     {/*<Route path = "/post/:_id/edit" component={EditPost} />*/}
</Route>
);