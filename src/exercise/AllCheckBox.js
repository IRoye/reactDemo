
// 复选框， 全选， 取消， 反选

import React, {Component} from 'react';

class AllCheckBox extends Component {
    
     clickAll(){
       
       let nodes = document.getElementsByName('checkSelects');
       for(let i in nodes){
           if(i === 'length'){
               break;
           }
          nodes[i].checked = true;
       }

     }
     clickReset(){
           let nodes = document.getElementsByName('checkSelects');
           for(let i in nodes){
           if(i === 'length'){
               break;
           }
          nodes[i].checked = false;
       }
     }
     clickBack(){
           let nodes = document.getElementsByName('checkSelects');
            for(let i in nodes){
           if(i === 'length'){
               break;
           }
           if(nodes[i].checked){
               nodes[i].checked = false;
           }else{
               nodes[i].checked = true;
           }
       }

     }

     getStyles() {

        return {
            root: {
                margin: '1rem  auto',
                height: '100vh',
                textAlign: 'center'
            },
            button: {
                width: '5rem',
                height: '3rem',
                borderRadius: '5px',
                display:'block',
                margin: '1rem auto',
                boxShadow:'none',

            }
        }

    }
    render() {
        const styles = this.getStyles();
        return (
            <div id='checkboxId' style={styles.root}>
                <h1>全选， 取消， 反选</h1>
                <input type='checkbox' name='checkSelects' value='1'/>1
                <br/>
                <input type='checkbox' name='checkSelects' value='2'/>2
                <br/>
                <input type='checkbox' name='checkSelects' value='3'/>3
                <br/>
                <input type='checkbox' name='checkSelects' value='4'/>4
                <br/>
                <span>_______________________________________</span>
                <br/>
                <button type='button' name='all' style={styles.button} onClick={this.clickAll.bind(this)}>全选</button>
                <button type='button' name='reset' style={styles.button} onClick={this.clickReset.bind(this)}>取消</button>
                <button type='button' name='back' style={styles.button} onClick={this.clickBack.bind(this)}>反选</button>
            </div>
        );
    }
}

export default AllCheckBox;