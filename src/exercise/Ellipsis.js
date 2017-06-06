//  实现省略号


import React,{Component} from 'react';

export default class Ellipsis extends Component {

   componentDidMount() {

    let node = document.getElementsByClassName('content')[0];
    console.log('距离父元素左',node.offsetLeft);
    console.log('距离父元素top',node.offsetTop);
    console.log('距离父元素高',node.offsetHeight);
    console.log('距离父元素宽',node.offsetWidth);
    //console.log('父元素',node.offsetParent.style);

   }

    getStyles(){
       return{
           root:{
               height: '100vh',
               textAlign: 'center',
           },
           content:{
                width: '400px',
                display: 'box',
                overflow: 'hidden',
                textOverflow: 'ellipsis',  
                wordBreak: 'break-all'  ,
                boxOrient: 'vertical',  
                lineClamp: '3',
				border: '1px solid black',
           }
       }
    }
    render() {
        const styles = this.getStyles();
        return (
            <div className="class-name" style={styles.root}>
                <h1>第一种方法：使用CSS 属性： textOverflow:'ellipsis'
                    overflow:'hidden'</h1>
                <div className='contentE'>
erby8cry834ncru934ucr43nucr34urc[34urc[m3i4rci34[0cri34rc43uru34ru34cru34cru34]]]fherufhriufirejfioerjfoefrefijreifjrefjrejfoefopefperfoejrojreiogjrejgoperjgoergjoerjfoperkfoerf
                </div>
            </div>
        );
    }
}

