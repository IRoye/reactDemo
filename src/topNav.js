import React, {Component} from 'react';
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
             <li style={styles.liRoot}><a href={`/about`} style={styles.aRoot}>艳婷</a></li>
             <li style={styles.liRoot}><a href={`/posts`} style={styles.aRoot}>文章列表</a></li>
             <li style={styles.liRoot}><a href="#" style={styles.aRoot}>艳婷</a></li>
         </div>
     );
  }
}
export default TopNav;