import React, { Component } from 'react';
import {Link} from 'react-router';
import Radium from 'radium';

class Form extends Component {

 handleSubmit(e) {
  e.preventDefault();
  const category = this.refs.category.value;
  const title = this.refs.title.value;
  const content = this.refs.content.value;
  this.props.publishPost({category, title, content});
}

  getStyles() {
    return {
      form: {
        padding: '20px 40px',
      },
      div: {
        marginBottom: '10px'
      },
      label: {
        display: 'block',
        fontSize: '.9em',
        color: 'rgba(0,0,0,.6)',
        paddingBottom: '10px'
      },
      input: {
        width: '100%',
        height: '48px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        padding: '10px',
        //元素的内边距和边框不会再增加元素的宽度
        boxSizing: 'border-box',
        ':focus': {
          border: '1px solid #00bcd4',
          outline: 'none'// outline （轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用
        }
      },
      actions: {
        textAlign: 'center'
      },
      button: {
        width: '120px',
        height: '36px',
        border: 'none',
        backgroundColor: '#ff4081',
        fontSize: '1em',
        color: '#fff',
        display: 'inline-block',
        margin: '20px auto 0',
        borderRadius: '20px',
        ':hover': {
          cursor: 'pointer'
        },
        ':focus': {
          outline: 'none'
        }
      },
      link: {
        display: 'inline-block',
        marginLeft: '15px',
        fontSize: '1em',
        color: '#00bcd4',
        opacity: '.8', // 1.0 是完全不透明
        textDecoration: 'none'
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <form style={styles.form} onSubmit={this.handleSubmit.bind(this)}>
        <div style={styles.div}>
          <label style={styles.label}>分类</label>
          <input style={styles.input} key='0' ref='category' />
        </div>
        <div style={styles.div}>
          <label style={styles.label}>标题</label>
          <input style={styles.input} key='1' ref='title' />
        </div>
        <div style={styles.div}>
          <label style={styles.label}>内容</label>
          <textarea style={[styles.input, {height: '100%'}]} rows='20' key='2' ref='content' />
        </div>
        <div style={styles.actions}>
          {/*  */}
          <button type='submit' style={styles.button}>发布文章</button>
          {/* 取消的时候直接把所有的页面元素给reset */}
          <Link to='/' style={styles.link}>取消</Link>
        </div>
      </form>
    );
  }
}

export default Radium(Form);