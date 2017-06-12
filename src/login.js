import React, {Component} from 'react';
import {Link} from 'react-router';
class Login extends Component{
  getStyles(){
     return {
       root:{

       }
     }
  }
	render(){
	   return(
        <div style={{
          marginRight: '2rem',
        }}> 
           <span><Link style={{
             fontSize: '.9rem',
             textDecoration: 'none',
             color: 'black',
           }} to={`/login`}>登录</Link></span>
        </div>
    );
  }
}
export default Login;