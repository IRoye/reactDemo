//  图片懒加载

import React,{Component} from 'react';

export default class LazyLoad extends Component {
    componentDidMount() {
        
        let imgList = document.getElementsByClassName('lazyLoad');
        for(var i in imgList){
           if(i === 'length'){
               break;
           }
           //判断是不是在视口内
           var coords = imgList[i].getBoundingClientRect();
           console.log('高度',coords.top);
           console.log('视口高度', window.innerHeight);
           if((coords.top >= 0 && coords.left >= 0 && coords.top ) <= (window.innerHeight || document.documentElement.clientHeight)){
               imgList[i].src =  imgList[i].getAttribute('data-src');
               imgList[i].style.width = 'auto';
               imgList[i].style.height = 'auto';
           }
        }
        window.onscroll = function(){
           for(var i in imgList){
           if(i === 'length'){
               break;
           }
           //判断是不是在视口内
           var coords = imgList[i].getBoundingClientRect();
           console.log('高度',coords.top);
           console.log('视口高度', window.innerHeight);
           if((coords.top >= 0 && coords.left >= 0 && coords.top ) <= (window.innerHeight || document.documentElement.clientHeight)){
               imgList[i].src =  imgList[i].getAttribute('data-src');
               imgList[i].style.width = 'auto';
               imgList[i].style.height = 'auto';
           }
        }
      }
    }
    getstyles(){
        return{
            imgs: {
                backgroundColor: '#d3d3d3', 
                transition: 'all 2s linear 2s',             
            }
        }
    }
    render() {
        const styles = this.getstyles();
        return (
            <div className="root">
                {/*               
                img 标签是内联替换元素
                它在计算height/margin/width等值或在绝对定位的时候，有一些额外的规则。
                CSS2.1 第10章）比如设定了width但未设置height, img的height会根据比列缩放。              
                */}
                <img className='lazyLoad' data-src={require('../assets/img11.png')} style={styles.imgs}/>
                <div style={{
                    width: '50%',
                    height: '600px',
                }}></div>
                <img className='lazyLoad' data-src={require('../assets/img22.png')} style={styles.imgs}/>
                <div style={{
                    width: '50%',
                    height: '600px',
                }}></div>
                <img className='lazyLoad' data-src={require('../assets/img33.png')} style={styles.imgs}/>
            </div>
        );
    }
}