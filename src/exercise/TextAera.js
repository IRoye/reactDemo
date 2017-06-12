//  使用div 来模拟TextAera

import React,{Component} from 'react';

export default class TextAera extends Component {


    haha(){
        console.log('哈哈');
    }
    componentDidMount() {
        this.haha();
        //输入文本
       let inputLeft = document.getElementById('inputAera');
       let button = document.getElementById('move');
       let inputRight = document.getElementById('inputRight');
       //使用一个正则表达式字面量，其由包含在斜杠之间的模式组成
    //    .的话， 只匹配了一个字符
       let regex = /(<div>.*|\n<\/div>)/;
       button.onclick = function(){
           //不能这样判断
           let words = inputLeft.childNodes;
           for(var i = 0;i< words.length; i++){
               console.log('类型：', words[i].nodeType, 'words[i]:', words[i]);
               //对每个节点进行处理
               //console.log('words[i]:', words[i].nodeValue.toString());
               console.log(regex.test(words[i].toString()));
               if(regex.test(words[i].toString())){
                   console.log('hahah');
               }

           }
           // 
        //    let newWords = words.replace(regex, function(match, p1, p2){
        //       let result = '';
            //    console.log('match:', match, 'p1:', p1, 'p2:', p2);

        //    });
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