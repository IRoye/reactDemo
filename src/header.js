import React, {Component} from 'react';
import Search from './search';
import TopNav from './topNav';
import ItemCates from './Itemcates';
class Header extends Component{
	render(){
	   return(
        <div className="app-header" style={{
            zIndex: '102',
        }}>
            <div className="app-logo"><img src={require('./assets/logo.png')}/></div>
            <TopNav />
            <Search />
        </div>
    );
  }
}
export default Header;  