import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Radium ,{StyleRoot} from 'radium';
import CourseActions from './CourseActions';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


import {Link} from 'react-router';

class Course extends Component {
 constructor(props) {
 super(props);
 this.state = {
   likes: this.props.course.likes
 }
}

increment() {
  this.setState({likes: this.state.likes + 1})
}

  getStyles() {
    return {
      root: {
        margin: '0 2rem 4rem',//3个值得时候，上，左右，下；
        width: '320px',   
        marginLeft: 'auto',
        marginRight: 'auto',
        // '@media (min-width: 600px)': {
        //   flexBasis: 'calc(50% - 4rem)'
        // }
      },
      imgWrap: {
         backgroundSize: 'contain',
      },
      img: {
        width: '100%',
        display: 'block',
      }
    };
  }

  render() {
    //   this.props组件用来传值，具体的值是从父组件中传递的；
    const { course } = this.props;
    let styles = this.getStyles();
    return (
      <div style={styles.root}>
        <Card>
          <div style={styles.imgWrap}>
            {/*alt 是网站上图片的文字提示 */}
            <Link to={`/view/${course.id}`}>
            <img src={course.image} alt={course.name} style={styles.img} />
            </Link>
            {/* 这里是心形图片组建*/}
            <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={this.state.likes} className="likes-heart">{this.state.likes}</span>
          </CSSTransitionGroup>
          </div>
          {/* 将状态传递给CourseAction组件中去， 一个是点赞数， 一个是增加心的方法 ，还有一个是课程 */}
          <CourseActions course={course} increment={this.increment.bind(this)} likes={this.state.likes}/>
        </Card>
      </div>
    );
  }
}
export default Radium(Course);