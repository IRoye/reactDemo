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
                flexDirection: 'column',
                display: 'none',
                backgroundColor: '#D3D3D3'
            }

        }
    }


    componentWillReceiveProps(nextProps) {        
        this.setState({
            content: nextProps.modal.content === undefined ? '': nextProps.modal.content,
            close: nextProps.modal.close === undefined ? 'true': nextProps.modal.content,
        })
    }

    change() {    
        this.setState({
            content: '',
            close: 'true'
        })

    }

   componentDidUpdate(prevProps, prevState) {

        let element = document.getElementsByClassName('Modal')[0];
        element.style.display = this.state.close === 'true'? 'none' : 'flex';
   }
    
    render() {

        const styles = this.getstyles();
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

export default Popups;