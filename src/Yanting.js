import React, {Component} from 'react';
import pictures from './data/pictures';
import Course from './Course';
import Radium , {StyleRoot} from 'radium';

class Yanting extends Component{

	render(){
		let styles = {
			root : {
				maxWidth : '1200px',
				margin: '10px auto',
				apddingTop: '6rem',
				paddingBottom: '6rem',
				dislay: 'flex',
				flexWrap: 'wrap' ,
				overflow:'visible',
			},
			subroot :{
                margin: '.5rem auto',               
			}
		};
		return (
			<div style={styles.root} className="about">
				{/*展示列表*/}
				{pictures.map((course, i) => <Course key={i} course={course}/>)}
			</div>
		)
	}
}

export default Radium(Yanting);
