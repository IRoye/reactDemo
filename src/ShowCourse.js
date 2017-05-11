import React, { Component } from 'react';

import courses from './data/pictures';
import Course from './Course';

class ShowCourse extends Component {
 
  getStyles() {
    return {
      top: {
        backgroundColor: '#00bcd4',
        paddingTop: '3rem',
        paddingBottom: '1rem'
      },
      container: {
        maxWidth: '900px',
        margin: '0 auto',
      }
    };
  }
  render() {
      let styles = {
			root : {
				maxWidth : '100%',
				dislay: 'flex',
				flexWrap: 'wrap',
				overflow:'visible',
				height: '100vh',
			},
			subroot :{
                margin: '.5rem auto',                
			},
			content : {
				height:'100px',
				width: '100%',
			}
		};
    const { courseId } = this.props.params;

//    findIndex() 方法对数组中的每一个元素执行一次回调函数直至有一个   "回调函数返回真值" 。
//    如果找到了一个这样的元素， 则 findIndex 将会立刻返回这个元素的索引。否则 findIndex 将会返回 -1
    const index = courses.findIndex((c) => c.id === courseId);
    const selectedCourse = courses[index];

    let style = this.getStyles();
    return (
      <div style={styles.root}>
        <div style={style.top}>
          <div style={style.container}>
            <Course course={selectedCourse} />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCourse;