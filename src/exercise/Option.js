// 判断下拉框中的值是否被选中

import React, {Component} from 'react';

export default class Option extends Component {

    //每项注册一个onChange 事件
    change() {
        let options = document.getElementById('selectOptions');

        // 这个， 不能使用每一项来 注册方法
        options.onchange = function () {
            console.log('值：', document.getElementsByClassName('selectOption')[0].lastChild.childNodes[0].nodeValue);
            if (this.value === '') {
                document.getElementsByClassName('selectOption')[0].lastChild.childNodes[0].nodeValue = '没有选中';
            } else {
                document.getElementsByClassName('selectOption')[0].lastChild.childNodes[0].nodeValue = this.value;
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
            <div className="selectOption" style={styles.root}>
                <select id='selectOptions' onClick={this.change.bind(this)} >
                    <option value="">请选择</option>
                    <option value="1">选项1</option>
                    <option value="2">选项2</option>
                    <option value="3">选项3</option>
                    <option value="4">选项4</option>
                    <option value="5">选项5</option>
                </select>
                <br/>
                <span>---------------------------------</span>
                <br />
                <span>值：</span>
            </div>
        )
    }
}
