import React, {Component} from 'react';
import pictures from './data/pictures';
import {FlatButton, TextField, Card} from 'material-ui';
class About extends Component{
	render(){
		let styles = {
			root : {
				maxWidth : '100%',
				dislay: 'flex',
				flexWrap: 'wrap',
				overflow:'visible',
				height: '120vh',
			},
			subroot :{
                margin: '.5rem auto',                
			},
			content : {
				height: '100%',
				width: '100%',
			}
		};
	   return(
       <div style={styles.root} className="about">
          <div className="content"></div>
       </div>
    );
  }
}
export default About;