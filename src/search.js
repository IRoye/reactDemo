import React, {Component} from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

class Search extends Component{

  changeLength(){
    // let 声明的变量，只在let所在的代码块中有效；
     let node = document.getElementsByClassName('app-search')[0];
     node.style.width = '30%';
  }

   trim(str){
     return str.replace(/(^\s*)|(\s*$)/g, "");
   }
  
  minusLength(){
     let inputValue = document.getElementById('search-text').value;
     if(this.trim(inputValue).length === 0){
         let node = document.getElementsByClassName('app-search')[0];
         node.style.width = '10%';
     }
  }
  // es6前面不需要加 function关键字

	render(){
        let iconStyles = {
          color: '#9E9E9E',
          height: '20px',
          width: '20px',
          marginLeft: '2%',
     };
	   return(
        <div className="app-search" >
            <ActionSearch style={iconStyles} onClick={this.changeLength.bind(this)}/>
            <input type="text" className="search-text" id="search-text" onFocus={this.changeLength.bind(this)} onBlur = {this.minusLength.bind(this)}
            />
        </div>
    );
  }
}
export default Search;