import React, { Component } from 'react';
import { Link } from 'react-router';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import Radium from 'radium';

class CourseActions extends Component {
  getStyles() {
    return {
      root: {
        borderTop: '1px solid #e2e2e2',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 600px)': {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
      },
      name: {
        color: '#4c5765',
        fontSize: '1.2rem',
        marginBottom: '20px',
        textAlign: 'center',
        '@media (min-width: 600px)': {
          marginBottom: 0,
        }
      },
      btnWrap: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      a: {
        display: 'block',
        marginLeft: '10px',
        textDecoration: 'none'
      },
      button: {
        backgroundColor: '#f2f4f6',
        color: '#4c5765',
        height: '36px',
        minWidth: '80px',
        border: 'none',
        padding: '3px 6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ':hover': {
          cursor: 'pointer'
        },
        ':focus': {
          outline: 'none'
        },
      },
      icon: {
        width: '18px',
        height: '18px',
        paddingRight: '6px'
      }
    };
  }

  render() {
    // 获取课程
    const { course } = this.props;
    let styles = this.getStyles();
    return (
      <div style={styles.root}>
        {/* 课程名字显示 */}
        <div style={styles.name}>{course.name}</div>
        <div style={styles.btnWrap}>
          {/* 点赞按钮*/}
          <button style={styles.button} onClick={this.props.increment} key='1'>
            <ActionThumbUp color='#4c5765' style={styles.icon} />
            <div>{this.props.likes}</div>
          </button>

          {/* 评论按钮*/}
          <Link to={`/view/${course.id}`} style={styles.a}>
            <button style={styles.button} key='2'>
              <CommunicationComment color='#4c5765' style={styles.icon} />
              <div>0</div>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Radium(CourseActions);