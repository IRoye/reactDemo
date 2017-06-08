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
import Checked from './exercise/checked';
import Checkbox from './exercise/checkbox';
import BanCheckBox from './exercise/banCheckbox';
import AllCheckBox from './exercise/AllCheckBox';
import TextAeraCheckbox from './exercise/TextAeraCheckbox';
import Option  from './exercise/Option';
import Linkage from './exercise/Linkage';
import FileInput from './exercise/FileInput';
import ZoomImg from './exercise/zoomImg';
import swiper from './exercise/swiper';
import ShowBigImg from './exercise/ShowBigImg';
import Ellipsis from './exercise/Ellipsis';
import Fold from './exercise/Fold';
import HeightLight from './exercise/HeightLight';
import TextAera from './exercise/TextAera';

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
     {/*  判断单选框是否选中 */}
      <Route path = "/exercise/24" component={ Checked } />
      {/*  复选框至少选中一项 */}
      <Route path = "/exercise/25" component={Checkbox} />
      {/* 复选框最多选中几项 */}
      <Route path = "/exercise/26" component={BanCheckBox} />
      {/* 复选框， 全选， 取消， 反选 */}
      <Route path = "/exercise/27" component={AllCheckBox} />
      {/* 根据指定的内容选中复选框 */}
      <Route path = "/exercise/28" component={TextAeraCheckbox} />
      {/* 判断下拉框中的值是否被选中 */}
      <Route path = "/exercise/30" component={Option} />
      {/* 下拉框二级联动 */}
      <Route path = "/exercise/31" component={Linkage} />

      <Route path = "/exercise/32" component={FileInput} />
      {/*  放大镜显示图片 */}
      <Route path = "/exercise/33" component={ZoomImg} />
       {/* 图片轮播 */}
      <Route path = "/exercise/34" component={swiper} />
      {/*  点击显示大图 */}
      <Route path = "/exercise/35" component={ ShowBigImg } />
      {/* 文本省略号 */}
      <Route path = "/exercise/36" component={ Ellipsis } />
      {/* 文本段落的展开和折叠 */}
       <Route path = "/exercise/37" component={ Fold } />
       {/* 关键字的高亮显示 */}
       <Route path = "/exercise/38" component={ HeightLight } />
       {/* 关键字高亮显示  */}
       <Route path = "/exercise/39" component={ TextAera } />
</Route>
);