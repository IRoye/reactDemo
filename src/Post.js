// 显示单个文章的页面
/*

都是传递过来一个 id 后， 然后根据这个ID 来重新查询

 */

import React, { Component } from 'react';
import map from 'lodash/fp/map';
import {Link} from 'react-router';
import axios from 'axios';
import Settings from './setting/settings';

class Post extends Component{

constructor(props){
   super(props);
   this.state = {
       post : {}
   }    
}

 componentWillMount() {
    axios.get(`${Settings.host}/posts/${this.props.params._id}`).then(res => {
        this.setState({
            post : res.data.post
        })
    }).catch(res => {
        if(error.response){
            console.log(error.response.data.error);
        }else{
            console.log(error.message);
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
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
      }
    }
  }
  render(){
      const styles = this.getStyles();   
      return(
         <div style={styles.root}>
         <div style={styles.content}>
         <div style={styles.category}>{this.state.post.category}</div>
         <div style={styles.title}>{this.state.post.title}</div>
         <div style={styles.text}>{this.state.post.content}</div>
         </div>
         </div>
      );
  }
}

export default Post;