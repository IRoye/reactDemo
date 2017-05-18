import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ItemCates extends Component{
    
 componentWillReceiveProps(nextProps) {
     console.log('进来了吗？：',nextProps);   
     //获取元素，然后修改元素的className;
     // 返回一个nodeList
     let node = document.getElementsByClassName('app-item')[0];
     if(nextProps['hidden'] === 'hide'){
         node.classList.add('hide');
     }else if(nextProps['hidden'] === 'show'){
         node.classList.remove('hide'); 
     }
 }
   getStyles(){
    return {
    root: {
        width: '100%',
        height: '200px',
        backgroundColor :'black',
        color : 'white',
        // 为什么设置了 高度结果高度却塌陷了， 是因为
        // 布局是flex布局，而容器内的每个元素 flex-shrink 的默认值是：1，
        // 既， 空间不足的时候， 那么容器就会等比例缩小， 结果吧该组件的高度给压缩成0了
        position: 'absolute',
        transition: 'transform 1s ease', 
    }, 
    hide: {
       visibility:'hidden',
    }  

}

   }

   render(){
   const {hidden, comments, courses} = this.props;  
   console.log('丫的开始打印了哈！！！', hidden);
  const styles = this.getStyles();
  return(
  <div className="app-item hide" style={styles.root}></div>
  );
}
}
ItemCates.propTypes = {
 comments : PropTypes.object.isRequired,
 hidden: PropTypes.string.isRequired,
 courses: PropTypes.array.isRequired,

}

export default ItemCates;