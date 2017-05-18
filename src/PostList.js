import React, { Component } from 'react';
import axios from 'axios';
import map from 'lodash/fp/map';
import {Link} from 'react-router';
import post from './Post';
import Settings from './setting/settings';


class PostList extends Component {
  constructor(){
      super();
      this.state = {
          posts: []
      };
  }
// componentWillMount会在组件render之前执行，并且永远都只执行一次
 componentWillMount() {
     console.log('haha')
     // axios是返回一个promise
     axios.get(`${Settings.host}/posts`).then(res => {
         this.setState({
             posts : res.data.posts
         })
     }).catch(error => {
         if(error.response){
             console.log(error.response.data.error);
         }else{
             console.log(error.messgae);
         }
     })
 }

  getStyles() {
    return {
      root: {
         height: '100vh',
      },
      content: {
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em'
      }, 
      link: {
         textDecoration: 'none', 
         dispaly:'inline-block',
         float : 'right',
         fontSize: '1.0rem',// em 相对于父元素来设置字体大小
         //rem 是相对于根元素<html>
         margin: 'auto 1rem',
      }
    }
  }

  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
      <div style={styles.content} key={post._id}>
      {/*加入链接  样式要放在前面  */}
      <div style={styles.title}>{post.title}    
      <Link style={styles.link} to={`/post/${post._id}`}>查看</Link>
      <Link style={styles.link} to={`/post/${post._id}/edit`}>编辑</Link>        
      </div>
      </div>
      )
    }, this.state.posts)
    return (
    <div style={styles.root}>
      { postList }
    </div>
  );
  }
}

export default PostList;