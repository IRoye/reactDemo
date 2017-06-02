//  点击显示大图

import React,{Component} from 'react';

export default class ShowBigImg extends Component {

    componentDidMount(){

     
     let imgs = document.getElementsByClassName('content-img');
     let modal = document.getElementsByClassName('ImgView')[0];
     let bigImg = document.getElementById('bigImg');
         
        for(let img in imgs){
        
         if(img === ('length' || 'item' || 'namedItem')){
               break;
           }   

          imgs[img].onclick = function(){

            modal.style.display = 'block';
            modal.style.opacity = '0.85';
            modal.style.top = '0';
            modal.style.left = '0';
            bigImg.style.opacity = '1';

          }
         
        }
    }

    hideBigImg(){

        let modal = document.getElementsByClassName('ImgView')[0];
        modal.style.display = 'none';         

   }

   getStyles(){
       return {
           root:{
               height: '100vh',
           }
       } 
    }
    render() {
        const styles = this.getStyles();
        return (
            <div className="class-name" style={styles.root}>
                <div className='content'>
                    {/*  用zoom-in 和zoom-out 来控小手 */}

                    {/*              
                    img 在元素分类中属于 replaced （被替换的）元素。replaced 元素表示这个元素内容的显示不是由 CSS 控制的。
                    换句话说，对于 img 元素而言，图片的内容并不是由 CSS 定义的，而是通过其 src 属性指向的资源决定的
                    */ }
                  <img className='content-img' src={require('../assets/small.png')}  style={{
                    cursor: 'zoom-in', 
                    width: '30%',      
                }} />
                <img className='content-img' src={require('../assets/small.png')}  style={{
                    cursor: 'zoom-in', 
                    width: '30%', 
                }} />
                </div>
                {/*  用imgView来做整个遮罩层。 */}
                <div className='ImgView' style={{
                    display: 'none',
                    position: 'fixed',
                    //top:'0',
                    //left: '0',
                    right: '0',
                    bottom:'0', 
                    backgroundColor: '#d3d3d3',
                    opacity: '0',
                    zIndex: '101',
                    //动画:
                    transition: 'all 2s ease-in .3s',
                }} onClick={this.hideBigImg}>
                    {/*  用imgView-inner来做图片的容器 */}
                     <div className='ImgView-inner' style={{
                      // 垂直居中显示
                      // 暂时设置一个宽高
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      right: '0',
                      bottom: '0',  
                      margin: 'auto',
                     }}> 
                     <img id='bigImg' src={require('../assets/small.png')} style={{
                      // 垂直居中显示
                      // 暂时设置一个宽高
                      position: 'absolute',                     
                      left: '0',
                      top: '0',
                      opacity: '0.1',
                      right: '0',
                      bottom: '0',  
                      margin: 'auto',
                      cursor: 'zoom-out',  
                      transition: 'all 2s ease-in .3s',
                     }}/>   
                     </div>
                </div>
            </div>
        );
    }
}