// 组件， 图片的放大镜显示

// 文章参考： http://www.jianshu.com/p/bcccdef90538#

import React, {Component} from 'react';

class ZoomImg extends Component{


 constructor(props) {
     super(props);
     this.state = {
        min: null,
        fd: null,
        max: null,
     };
 }

 onmouseoverEvent(){
        //1.鼠标覆盖显示max和fd
        fd.style.display = "block";
        this.state.max.style.display = 'block';
    }
     
// 渲染完成后
  componentDidMount() {
      
      this.state.min = document.getElementById('min-img');
      this.state.fd = document.getElementById('fd');
      this.state.max = document.getElementById('max-img');
      this.state.maxContent = document.getElementById('maxContent');

  }

   
   // 有fd 在上面挡着， 这样只要在当前fd的范围内移动鼠标， 那么就不会造成mousemove这个事件；
    mouseMoveEvent(event){
       

       console.log('高度：',fd.offsetHeight);
       console.log('鼠标箭头的Y:', event.nativeEvent.clientY)
       // 使用nativeEvent 获取事件的属性
       // 事件发生时鼠标在浏览器内容区域的X/Y坐标
       // 
       let x = event.nativeEvent.clientX - fd.offsetWidth/2;
       let y = event.nativeEvent.clientY - fd.offsetHeight;
       
       console.log('计算出的放大镜y坐标', y);
       //放大镜在min 里面移动的距离
       
       let maxX  = this.state.min.clientWidth - fd.offsetWidth;
       let maxY  = this.state.min.clientHeight - fd.offsetHeight;


       if(x < 0){
           x = 0;
       }else if(x > maxX){
           x = maxX;
       }

       if(y < 0){
           y = 0
       }else if(y > maxY){
           y = maxY;
       }


      console.log('event.nativeEvent.clientX:', event.nativeEvent.clientX);

       console.log('靠近左边的：',x);


       // 是影响的left, right ，所以x = 0的话， 那就已经是靠边的！！
       fd.style.left = x+"px";
       fd.style.top = y+"px";

       let moveX = x/maxX;
       let moveY = y/maxY;

            this.state.maxContent.style.left = moveX * (this.state.max.clientWidth - this.state.maxContent.offsetWidth) + "px";
            this.state.maxContent.style.top = moveY * (this.state.max.clientHeight - this.state.maxContent.offsetHeight) + "px";
    }

     getStyles(){
         return{
             minImg: {
                 width: '350px',
                 height: '350px',
                 border: '1px solid black',
                 position: 'relative',
                 float: 'left',
             },
             fd:{
                 opacity: '0.3',
                 width: '100px',
                 height: '100px',
                 backgroundColor: 'skyblue',
                 position: 'absolute',
                 display: 'none',//最开始是隐藏的。
                 top: '0',
                 left: '0',
             },
             max: {
                 width: '350px',
                 height: '350px',
                 position: 'relative',
                 display: 'none',
                 float: 'left',
                 overflow: 'hidden',
             },
             maxContent:{
                 position:'absolute',

             }
         }
     }
     render(){
         const styles = this.getStyles();
         return(
            //  父元素是relative, 子元素是absolute
             <div style={{position:'relative'}}>
             {/* 这两个div 怎么会有相同的起点？ */}
             <div id='min-img' style={styles.minImg} onMouseMove={this.mouseMoveEvent.bind(this)} onMouseOver={this.onmouseoverEvent.bind(this)}>
             <img src={require('../assets/img.jpg')} />
             {/* 这一部分用来模拟放大镜 */}
             {/* 如果是子元素的话， 那么就不会遮挡对于父元素的*/}
             <div id="fd" style={styles.fd}></div>  
             </div>
             {/* 这边放置大图 */}
             <div id="max-img" style={styles.max}>
                 <img id='maxContent' src={require('../assets/img2.jpg')} style={styles.maxContent}/>
             </div>
             </div>
         )
     }

}

export default ZoomImg;