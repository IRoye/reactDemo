// 一个弹窗的组件

import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {changeModal} from '../actions';
import { connect } from 'react-redux';

class Popups extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
            close: 'true'
        }
    }
    getstyles() {
        return {
            root: {
                width: '40%',
                height: '30%',
                borderRadius: '10px',
                position: 'fixed',
                zIndex: '999',
                margin: 'auto',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                textAlign: 'center',
                paddingTop: '10px',
                //display: 'flex', 上下排列
                flexDirection: 'column',
                display: 'none',
                backgroundColor: '#D3D3D3'
            }

        }
    }

    componentWillReceiveProps(nextProps) {

        console.log('传递的参数：', nextProps.modal.close);
        this.setState({
            content: nextProps.modal.content,
            close: nextProps.modal.close,
        })

//    更新state的值会有延迟行为发生！！！！！！！！！
//避免在执行完this.setState后马上读取this.state，此操作并不会获得最新修改的状态。
        // let element = document.getElementsByClassName('Modal')[0];
        // console.log('样式：',element.style.display, this.state.close)
        
        // element.style.display = this.state.close === 'true'? 'none' : 'flex';
    }

    change() {    
        this.setState({
            content: '',
            close: 'true'
        })

    }

   componentDidUpdate(prevProps, prevState) {
        let element = document.getElementsByClassName('Modal')[0];
        console.log('样式1：',element.style.display)
        element.style.display = this.state.close === 'true'? 'none' : 'flex';
        console.log('样式2：',element.style.display)
   }
    
    render() {
        // let element = document.getElementsByClassName('Modal')[0];
        // console.log('样式：',element.style.display)
        // element.style.display = this.state.close === 'true'? 'none' : 'flex';


        const styles = this.getstyles();
        console.log('22222222222：', this.props)
        let { modal } = this.props;
        return (
            <div className="Modal" style={styles.root}>
                <div
                    className='content'
                    style={{
                    flexGrow: '1'
                }}>{this.state.content}</div>
                <div
                    className='button'
                    style={{
                    flexShrink: '0',
                    height: '20%',
                    lineHeight: '20%',
                    padding: '10px auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}>
                    <button
                        style={{
                        backgroundColor: '#1E90FF',
                        border: 'none',
                        outline: 'none',
                        borderRadius: '4px',
                        height: '80%',
                        width: '20%',
                        color: 'white',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}
                        onClick={this.change.bind(this)}>确定</button>
                </div>
            </div>
        );
    }
}

Popups.propTypes  = {
     modal : PropTypes.object.isRequired,
}

// Popups = connect()(Popups)
export default Popups;