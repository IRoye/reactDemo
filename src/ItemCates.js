import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemCatesstyles from './style/ItemCatesstyles.css';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import Radium ,{StyleRoot} from 'radium';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

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
        height: '300px',    
        backgroundColor :'black',
        color : 'white',
        // 为什么设置了 高度结果高度却塌陷了， 是因为
        // 布局是flex布局，而容器内的每个元素 flex-shrink 的默认值是：1，
        // 既， 空间不足的时候， 那么容器就会等比例缩小， 结果吧该组件的高度给压缩成0了
        //最外层的div 是absolute;
        //position: 'absolute',
        // 使用float脱离文档流时，其他盒子会无视这个元素，
        // 但其他盒子内的文本依然会为这个元素让出位置，环绕在周围
        //float: 'left',
        position: 'absolute',
        transition: 'transform 1s ease', 
    }, 
    cates: {
        display: 'flex',
        overFlow: 'hidden',
        margin: '4rem 8rem',
        padding: '10px auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',       
    } 

}

   }

   render(){
   const {hidden, comments, courses} = this.props;  
   console.log('丫的开始打印了哈！！！', hidden);
  const styles = this.getStyles();
  return(
  <div className="app-item hide" style={styles.root}>
      <ul className="items cates" style={styles.cates}>
       <li className="item cate">
           <a href={`/exercise/24`}>
               <ToggleStarBorder className='star' style={{color: 'white',verticalAlign: 'middle'}}/>
           <span>检测是否为数值型</span>
           </a>
        </li> 
        <li className="item cate"><a href='#'>TextAera自适应文字行数</a></li>   
        <li className="item cate">
            <a href='#'>
                <NavigationClose    style={{color: 'white',verticalAlign: 'middle'}}/>
                <span>判断单选框是否选中</span>

            </a>
        </li>   
        <li className="item cate">
            <a href='/exercise/25'>
            <NavigationClose    style={{color: 'white',verticalAlign: 'middle'}}/>
                <span>判断复选框至少选中一项</span>
            </a>
        </li>    
        <li className="item cate">
            <a href='/exercise/26'>
            <NavigationClose    style={{color: 'white',verticalAlign: 'middle'}}/>
            <span>限制复选框最多选择几项</span>
            </a>
        </li> 
        <li className="item cate">
            <a href='/exercise/27'>
            <NavigationClose    style={{color: 'white',verticalAlign: 'middle'}}/>
                <span>复选框全选， 取消，反选</span>
            </a>
        </li>   
        <li className="item cate">
            <a href='/exercise/28'>
            <NavigationClose    style={{color: 'white',verticalAlign: 'middle'}}/>
                <span>根据指定内容选中复选框</span>
            </a>
        </li>   
        <li className="item cate">
            <a href='#'>
                获取选中的复选框值
            </a>
        </li>    
        <li className="item cate">
            <a href='/exercise/30'>
            <NavigationClose    style={{color: 'white',verticalAlign: 'middle'}}/>
                <span>判断下拉框中的值是否被选中</span>
            </a>
        </li> 
        <li className="item cate">
            <a href='#'>
                <span>动态添加下拉选项</span>
            </a>
        </li>   
        <li className="item cate"><a href='#'>动态删除下拉选项</a></li>   
        <li className="item cate">
            <a href='/exercise/31'>
            <NavigationClose    style={{color: 'white',verticalAlign: 'middle'}}/>
                <span>下拉框二级联动</span>
            </a>
        </li>   
         <li className="item cate">
            <a href='/exercise/32'>
                <span>图片预览</span>
            </a>
        </li>       
        <li className="item cate">
            <a href='/exercise/33'>
                <span>放大镜显示图片</span>
            </a>
        </li> 
        <li className="item cate">
            <a href='/exercise/34'>
                <span>图片轮播</span>
            </a>
        </li>  
        <li className="item cate">
            <a href='/exercise/35'>
                <span>点击显示大图</span>
            </a>
        </li>             
         </ul>
  </div>
  );
}
}

ItemCates.propTypes = {
 comments : PropTypes.object.isRequired,
 hidden: PropTypes.string.isRequired,
 courses: PropTypes.array.isRequired,

}

export default Radium(ItemCates);