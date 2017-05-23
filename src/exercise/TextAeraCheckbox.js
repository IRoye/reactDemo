// 根据指定的内容选中复选框 onkeyup 事件会在键盘按键被松开时发生。


// search 可以用于查找子串是否存在

import React, {Component} from 'react';

class TextAeraCheckbox extends Component {

    change() {

        let textNode = document.getElementById('textBox');

        let checkboxNodes = document.getElementsByName('checkSelects');

        for (let data in checkboxNodes) {

            if (data === 'length') {
                break;
            }
            if (textNode.value.search(checkboxNodes[data].value) !== -1) {
                //选中
                checkboxNodes[data].checked = true;
            }else{
                checkboxNodes[data].checked = false;
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
                <h1>
                    根据指定的内容选中复选框</h1>
                <textarea id='textBox' onKeyUp={this.change.bind(this)}/>
                <br/>
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
            </div>
        )

    }

}

export default TextAeraCheckbox;