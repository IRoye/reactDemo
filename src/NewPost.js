import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
import Settings from './setting/settings';


class NewPost extends Component {
 
  publishPost(data){
  axios.post(`${Settings.host}/posts/create`, data).then(
      res => {
          console.log(res.data.message);
        //   这种方式会把跳转载入浏览器历史
          this.context.router.push('/');
      }
  ).catch(error => {
    if (error.response) {
      console.log(error.response.data.error);
    } else {
      console.log(error.message);
    }
  })
  }

   getstyles(){

     return {
       root : {

       },
       content : {
         width: '100%',
         maxWidth: '600px',
         margin: '30px auto',
         backgroundColor: '#fff',
         borderRadius: '10px',
         boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
       },
       title: {
        fontSize: '1.2em',
        textAlign: 'center',
        padding : '50px auto',
        margin: '20px auto',
       }

     }

   }

   render(){
       const styles = this.getstyles();
       return (
           <div style={styles.root}>              
                   <div style={styles.title}>写文章</div>
                   {/* 难道在这里就把函数给传递了吗？？？？？ */}
               <Form  publishPost={this.publishPost.bind(this)}/>
           </div>
       )
   }

}
// 传递给子树
NewPost.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default NewPost;
