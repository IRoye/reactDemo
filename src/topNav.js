import React, {Component} from 'react';
// 这里一定要加上.css
import TopNavStyles from './style/topNavStyles.css';
import {changeShow} from './actions';
import { connect } from 'react-redux';

class TopNav extends Component{

 rotate(){

   let node = document.getElementsByClassName('arrow')[0];
   let classes = node.classList;
   if(classes.contains('toDown')){
        classes.remove('toDown');
        classes.add('toUp');
        this.props.dispatch(changeShow('up'))
   }else if(classes.contains('toUp')){
        classes.remove('toUp');
        classes.add('toDown');
        this.props.dispatch(changeShow('down'))
   }
   
   //dispatch 一个action????如何引进来dispatch
  // this.props.dispatch(changeShow('show'))

 }
  render(){  
    
    let styles = {
        root: {
        listStyleType : 'none',
        
     },
        aRoot:{
        // text-decoration 该属性是没有继承性的
        textDecoration : 'none',
        display: 'block',
        height: '100%',
        lineHeight: '4.0rem',
        padding: '0 1.5rem',
        float : 'left',
        fontStyle: 'normal',
        color: '#424242',
        fontSize: '1rem'
    },
     liRoot: {
         float: 'left',
     } 
     ,
     arrow : {
          display: 'inline-block',
            width: '0',
  height: '0',
  borderWidth: '5px',
 // 这个样式必须要加上
  borderStyle: 'solid',
   // 初始状态是朝下的
   //   borderColor: 'black transparent transparent transparent',
     transition: 'transform .5s ease',
     }   
     };

     return(
         <div className="app-topnav" style={styles.root} >
           <nav className='list'>
             <ul>
             <li style={styles.liRoot}><a href={`/home`} style={styles.aRoot}>首页</a></li>
             <li style={styles.liRoot}><a href={`/about`} style={styles.aRoot}>艳婷</a></li>
             <li style={styles.liRoot}><a href={`/posts`} style={styles.aRoot}>文章列表</a></li>
             <li style={styles.liRoot}><a href="#" style={styles.aRoot} onClick={this.rotate.bind(this)}>艳婷</a>
             {/*  此处加入二级菜单  */}
             {/* 二级开始 */}
             <ul>
                  <li><a href="#">女神1</a></li>
                  <li><a href="#">女神2</a></li>
                  <li><a href="#">女神3</a></li>
             </ul>
             </li>
             {/* 二级结束 */}
             <li style={styles.liRoot}><a href={`/post/new`} style={styles.aRoot}>新建文章</a></li>
             <li style={styles.liRoot}>
                 <a href= '#' style={styles.aRoot} onClick={this.rotate.bind(this)}>
                     工具
                     <i className='arrow toDown' style={styles.arrow}></i>
                 </a>               
             </li>
             </ul>
             </nav>
         </div>
     );
  }
}

TopNav = connect()(TopNav)
export default TopNav;