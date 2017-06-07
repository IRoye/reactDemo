//  高亮显示

import React,{Component} from 'react';
// 引入CSS 模块
import HeightLightStyle from '../style/HeightLightStyle.css';
export default class HeightLight extends Component {

  componentDidMount() {
      
    let button = document.getElementById('controll');
    let search = document.getElementById('search');
    let highLights = document.getElementById('keyWordsHeightLight');
    
    //特殊字符, 后面用到的时候再添加
    let specialMark = ['\\', '.', '(', ')'];
    button.onclick = function(){
       
    // 取出所有的class 是mark 的span
     let marks = document.querySelectorAll('.mark');
    //明明有 10 个'/', 但是根据mark 查询出来的只有5个？？？？
     for(var i = 0; i < marks.length; i++){
         //将marks[i] 替换成它的文本节点的值
        console.log(marks[i]);
        marks[i].outerHTML = marks[i].firstChild.nodeValue;
     }
      let value = search.value;
      let original = value;
      if(specialMark.indexOf(value) !== -1){         
          // 给特殊字符加上一个前缀的'\' 符号， ’\‘ 也是转义字符， 也是需要加上前缀的'\';
          value = "\\" + value;
      }
      highLights.innerHTML = highLights.innerHTML.replace(new RegExp(value, 'g'), 
       '<span class="mark">'+original+'</span>');      
    }

  }
    getStyles(){
        return{
            root:{
                height: '100vh',
                textAlign: 'left',
            },
            key : {
                color: 'red',
            }
        }
    }
    render() {
        const styles = this.getStyles();
        return (
            <div className="class-name" style={styles.root}>
                <div className='content' style={{
                    textAlign: 'center',
                    paddingTop: '2rem',
                }}>
                <h4 style={{
                    marginBottom: '1rem',
                }}>关键字高亮</h4>
                    输入关键字：<input type='text' id='search' />
                    <span>
                        <button type='button' id='controll' style={{
                            height: '1.5rem',
                            width: '3rem',
                            border: 'none',
                            verticalAlign:'middle',
                        }}>搜索</button>
                    </span>
                    <p id='keyWordsHeightLight' style={{
                        width: '60%',
                        margin: '10px auto',
                        textAlign: 'left',
                        textIndent:'2rem'
                    }}>
                        username，又称id。未设置username时，你的豆瓣个人主页地址通常是：http://douban.com/people /1234567/
设置了username后（比如用datou作username），你的豆瓣个人主页地址将是：http://douban.com /people/datou/

username只可以设一次，以后不可更改（这是为了避免别人联接到你的主页时产生坏链接）。如果你现在不是百分之百的确定，可以暂时留为空，等以后再说。

“名号”就是你在豆瓣的网名，名号30天内只能修改一次。新注册7天内的用户不受此限制。
                    </p>
                </div>
                {/* 区分innerHTML和outerHTML  */}
                <h3></h3>
            </div>
        );
    }
}