// 图片的轮播

import React,{Component} from 'react';

import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import swiperStyles from '../style/swiperStyles.css'; 

export default class Swiper extends Component {
   

   componentDidMount() {
       // 初始化， 第一个按钮就是亮的：

       // 点击箭头的时候 用来标注按钮
       var  index = 1;
       // 获取list // 此处，使用doxument.getElementsByClassName 无法修改;
       let list = document.getElementById('list');
       //为每一个按钮注册事件
       let nodes = document.getElementById('buttons').getElementsByTagName('span');
       //nodes[0].style.backgroundColor = '#f5f5f5';
       for(var i in nodes){
           if (i === 'length') {
                break;
            }
           nodes[i].onclick = function(e){
               
               for(var singleButton in nodes){
                    if(singleButton === 'length'){
                        break;
                    }
                    nodes[singleButton].className = '';
               }
               //判断第一个
               list.style.left = (this.tabIndex) * (-600) + 'px'; 
               //修改选中按钮的样式：
               let button = nodes[this.tabIndex - 1];
               button.className = 'on'; 
               index = this.tabIndex;
           }
       }
       
       // 为每一个箭头注册事件
       let arrowLeft = document.getElementById('left');
       let arrowRight = document.getElementById('right');
       
       arrowLeft.onclick = function(){
            
            list.style.left  = parseInt(list.style.left) + 600 + 'px';
            if(parseInt(list.style.left) > -600){
              list.style.left = '-3000px';
           }
           else if(parseInt(list.style.left) < -3000){
              list.style.left = '-600px'; 
           }
           for(var singleButton in nodes){
              if(singleButton === 'length'){
                 break;
             }
            nodes[singleButton].className = '';
           } 
           
           index -- ;
           if(index < 1){    
               index = 5;
           }
           nodes[index - 1].className = 'on';
          
        
       }
       arrowRight.onclick = function(){
        
           list.style.left  = parseInt(list.style.left) - 600 + 'px';
            if(parseInt(list.style.left) > -600){
              list.style.left = '-3000px';
           }
           else if(parseInt(list.style.left) < -3000){
              list.style.left = '-600px'; 
           }

           for(var singleButton in nodes){
              if(singleButton === 'length'){
                 break;
             }
            nodes[singleButton].className = '';
           }
           
           index ++;
           if(index === 6){
               index = 1;
           }
           nodes[index - 1].className = 'on';
           

      }       
   }

   getstyles(){
       return{
           root:{
            //盛放图片， 宽度是600px;
            width: '600px',
            height: '400px',
            overflow: 'hidden',
            position: 'relative',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
           },
           content: {
            //    脱离文档流， 把之前的都给挡住了
               position: 'absolute',
            /**
             * 1. transition-property是用来指定当元素其中一个属性改变时执行transition效果著作权归作者所有。
             * 2. transition-duration是用来指定元素 转换过程的持续时间
             * 3. transition-timing-function的值允许你根据时间的推进去改变属性值的变换速率;
             * 4. transition-delay是用来指定一个动画开始执行的时间，也就是说当改变元素属性值后多长时间开始执行transition效果;
             * 
             */
              
            //    在css 中初始化一个 -600的宽度， 之后的都能打印出list.style.left来了
               left:'-600px',
               
           },
           button:{
              // backgroundColor: 'black',
               width: '10px',
               height: '10px',
               borderRadius: '10px',
               cursor: 'pointer',
               display: 'inline-block', // 加入display: block 才显示的
               opacity: '0.5',
               float: 'left',
               margin : 'auto .3rem',
               padding: '.5rem  auto',
               outline: 'none',
               border: '1px solid black',
                    // 使用动画美化切换的界面                      
           },
           arrow:{
                 position: 'absolute',
                    width: '40px',
                    height: '60px',
                    display: 'none',
                    left: '.3rem',
                    top: '0',
                    bottom: '0',
                    margin: 'auto',
                    backgroundColor: 'black',
                    opacity: '0.5',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color:'#fff',
           }
       }
   }

    render() {
        const styles = this.getstyles();
        return (
            <div style={{height: '100vh'}}> 
            <div className="container" id='container' style={styles.root}>
                {/* 图片 */}
                <div id='list' style={styles.content}>
                    {/* img 是一个内联元素 */}
                    <img src={require('../assets/5.jpg')} alt=""/>
                    <img src={require('../assets/1.jpg')} alt=""/>
                    <img src={require('../assets/2.jpg')} alt=""/>
                    <img src={require('../assets/3.jpg')} alt=""/>
                    <img src={require('../assets/4.jpg')} alt=""/>
                    <img src={require('../assets/5.jpg')} alt=""/>
                     <img src={require('../assets/1.jpg')} alt=""/>
                </div>                
                {/*  按钮  */}
                <div id='buttons' style={{
                    zIndex: '2',  
                    position: 'absolute',
                    // 父元素是relative, textAlign: center, 子元素是absolute, 那么除非子元素是已经把width 给设定好了，
                    //否则, 设置textAlign这种东西是无用的  
                    bottom: '.5rem', 
                    textAlign: 'center',
                    alignSelf: 'center',
                }}>
                    <span tabIndex='1' className='on' style={styles.button}></span>
                    <span tabIndex='2' style={styles.button} className=''></span>
                    <span tabIndex='3' style={styles.button} className=''></span>
                    <span tabIndex='4' style={styles.button} className=''></span>
                    <span tabIndex='5' style={styles.button} className=''></span>
                </div>
                <a href='#' className='arrow' id='left' style={{
                    position: 'absolute',
                    width: '40px',
                    height: '60px',
                    display: 'block',
                    left: '.3rem',
                    top: '0',
                    bottom: '0',
                    margin: 'auto',
                    backgroundColor: 'black',
                    opacity: '0.5',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color:'#fff',
                }}>
                <HardwareKeyboardArrowLeft style={{color:'white', height: '100%', verticalAlign: 'middle',}}/>
                </a>
                 <a href='#' className='arrow' id='right' style={{
                    position: 'absolute',
                    width: '40px',
                    height: '60px',
                    display: 'block',
                    right: '.3rem',
                    top: '0',
                    bottom: '0',
                    margin: 'auto',
                    backgroundColor: 'black',
                    opacity: '0.5',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color:'#fff',
                    lineHeight: '2rem',
                 }}><HardwareKeyboardArrowRight style={{color:'white', height: '100%', verticalAlign: 'middle',}}/></a>
            </div>
            </div>
        );
    }
}