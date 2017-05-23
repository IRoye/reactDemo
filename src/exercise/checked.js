// 判断单选框是否被选中

import React, {Component} from 'react';

class Checked extends Component{

change(){
      //初始化的时候
   let man = document.getElementById('sexMan');  
   let woman = document.getElementById('sexWomen');

   let status = man.checked? '男被选中':'女被选中';
   
   let node = document.getElementsByClassName('field')[0];
   // node.lastchild是一个只读属性， 艹
   node.lastChild.childNodes[0].nodeValue = status;

}

componentDidMount(){
   //初始化的时候
   let man = document.getElementById('sexMan');  
   let woman = document.getElementById('sexWomen');

   let status = man.checked? '男被选中':'女被选中';
   
   let node = document.getElementsByClassName('field')[0];
   // node.lastchild是一个只读属性， 艹
   node.lastChild.childNodes[0].nodeValue = status;
   console.log('孩子',node.lastChild.nodeType);
}  
getStyles(){

  return{
      root: {
          margin: '1rem  auto',
          height: '100vh',
          textAlign: 'center',
      }
  }

   }

   render(){
 const styles = this.getStyles();
    return(
     <div id='checkId' style={styles.root}>
         <h1>判断单选框是否选中</h1>
         <div className='field'>
             {/* 在react 中需要使用的是 defaultChecked 来标注一个默认的选项， 否则无法选中 */}
             <input type='radio' name='sex' id='sexMan' defaultChecked value='man' onClick={this.change.bind(this)}/> 男 
             <br />
             <input type='radio' name='sex' id='sexWomen' value='women' onClick={this.change.bind(this)}/> 女 
             <br />
             <span>_______________________________________________________</span>
             <br />
             <span>123</span>
         </div>
     </div>
    );
   }

}

export default Checked;

//  总结几个只知识点：

// 1. radio必须要有个初始值， 也就是：defaultChecked value

// 2. lastChild 是一个只读属性

// 3. 我们获取的p是一个元素节点,<p>元素本身的nodeValue值是一个null值,
// 而且最重要的是nodeValue属性是用来获取文本节点的值的。所以用 childNodes【0】再获取下面的文本节点

//