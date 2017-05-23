import React, {Component} from 'react';


class CheckBox extends Component{


 change(){
    let node = document.getElementsByName('checkSelects');
    let info = '';
    for(let i in node){
        console.log(i);
        if (node[i].checked){
            // 获取值
            info += node[i].value +'  ';
        }
    }
    
    let resultInfo = info === '' ? '未选择':'已经选择' + info;
    document.getElementById('checkboxId').lastChild.childNodes[0].nodeValue = resultInfo; 
 }
 componentDidMount() {

    let node = document.getElementsByName('checkSelects');
    let info = '';
    for(let i in node){
        console.log('key:',i);
        if (node[i].checked){
            // 获取值
            info += node[i].value +'  ';
        }
    }
    
    let resultInfo = info === '' ? '未选择':'已经选择' + info;
    document.getElementById('checkboxId').lastChild.childNodes[0].nodeValue = resultInfo;

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
<div  id='checkboxId' style={styles.root} >
  <input type='checkbox' name='checkSelects' defaultChecked value='1' onChange={this.change.bind(this)}/>1
  <br />
  <input type='checkbox' name='checkSelects' value='2' onChange={this.change.bind(this)} />2
  <br />
  <input type='checkbox' name='checkSelects'  value='3' onChange={this.change.bind(this)} />3
  <br />
  <input type='checkbox' name='checkSelects' value='4' onChange={this.change.bind(this)} />4
  <br />
  <span>_______________________________________</span>
  <br />
  <span>123</span>
</div>
)
}

}

export default CheckBox;