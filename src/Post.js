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
        console.log(res.data.post);
    }).catch(res => {
        if(error.response){
            console.log(error.response.data.error);
        }else{
            console.log(error.message);
        }
    })
 }

 componentDidUpdate(prevProps, prevState) {
     document.getElementsByClassName('content')[0].innerHTML = this.state.post;
 }

    getStyles() {
    return {
      root: {
          height: '100vh',
      },
      content: {
        position: 'relative',
        width: '70%',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        padding: '16px',
        borderLeft: '1px solid #d3d3d3',
        borderRight: '1px solid #d3d3d3',
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
         <div style={styles.content} className='content'>this.state.post</div>
         </div>
      );
  }
}

export default Post;