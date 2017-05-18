import React, {Component} from 'react';
// 这里一定要加上.css
import TopNavStyles from './style/topNavStyles.css';

class TopNav extends Component{
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
     };

     return(
         <div className="app-topnav" style={styles.root} >
           <nav className='list'>
             <ul>
             <li style={styles.liRoot}><a href={`/about`} style={styles.aRoot}>艳婷</a></li>
             <li style={styles.liRoot}><a href={`/posts`} style={styles.aRoot}>文章列表</a></li>
             <li style={styles.liRoot}><a href="#" style={styles.aRoot}>艳婷</a>
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
             </ul>
             </nav>
         </div>
     );
  }
}
export default TopNav;