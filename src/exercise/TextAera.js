//  使用div 来模拟TextAera

import React,{Component} from 'react';

export default class TextAera extends Component {
    componentDidMount() {
        //输入文本
       let inputLeft = document.getElementById('inputAera');
       let button = document.getElementById('move');
       let inputRight = document.getElementById('inputRight');

       button.onclick = function(){
           //获取左边的文本
           let words = inputLeft.innerHTML;
           let appendWords = document.createTextNode(words);
           inputRight.innerHTML = words;
       }
    }
    getStyles(){
        return{
            root:{
                textAlign: 'center',
            },
            key : {
                color: 'red',
            },
            inputAera : {
                width: '40%',
                minHeight: '200px',
                border: '1px solid black',
                borderRadius: '5px',
                //textAlign: 'left',
                padding: '.5rem auto',
                outline: 'none',
                textAlign: 'left',
            }
        }
    }
    render() {
        const styles = this.getStyles();
        return (
            <div className="root" style={styles.root}>
                <h3>使用div 来模拟TextAera</h3>
                 <div className='content' style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems:'center',
                     justifyContent: 'space-around',
                 }}>
                  {/* 一个div 的输入框*/}
                  <div id='inputAera' style={styles.inputAera} contentEditable='true'></div>
                  <button type='button' id='move' style={{
                      height: '30px',
                      width: '50px',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: 'pointer',
                  }}>转换</button>
                  <div id='inputRight' style={{
                      //float:'left',
                      display: 'inline-block',
                      width: '40%',
                minHeight: '200px',
                border: '1px solid black',
                borderRadius: '5px',
                textAlign: 'left',
                padding: '.5rem auto',
                outline: 'none',
                  }} ></div>
                 </div>
                 {/*<h1>----------------------------------------------------</h1>
                 <h3>测试div设置最小高度后的高度自适应</h3>*/}
            </div>
        );
    }
}