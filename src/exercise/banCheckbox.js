// 限制复选框最多选择几项

import React, {Component} from 'react';

class BanCheckBox extends Component {

    //
    componentDidMount() {
        //為每一個input 添加onclick事件
        let node = document.getElementsByName('checkSelects');
        console.log('已經創建了嗎？', node);
        for (let subNode in node) {
            console.log('key:', subNode);
            //在遍历的过程中， 会出现length这个属性
            if (subNode === 'length') {
                break;
            }
            node[subNode].onchange = function () {
                let num = 0;
                //遍歷
                let node2 = document.getElementsByName('checkSelects');
                console.log('此时的值：', this.checked, num);
                for (let i in node2) {
                    if (i === 'length') {
                        break;
                    }
                  if(node[i].checked){
                      num ++;
                  }
                  if(num > 3){
                      this.checked = false;
                  }

                }
            }
        }
    }

    getStyles() {

        return {
            root: {
                margin: '1rem  auto',
                height: '100vh',
                textAlign: 'center'
            }
        }

    }

    render() {
        const styles = this.getStyles();
        return (
            <div id='checkboxId' style={styles.root}>
                <h1>限制复选框的选择数目</h1>
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
                <span>123</span>
            </div>
        );

    }

}

export default BanCheckBox;