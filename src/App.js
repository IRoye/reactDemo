import React, { Component } from 'react';
import Home from './Home';
import Navbar from  './shared/Navbar';
import { AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppLeftNav from './shared/AppLeftNav';

class App extends Component{

   constructor(props, context) {
    super(props, context);
 
  }
   componentWillMount(){
   	let setNavBarState = function(){
   	this.setState({
   		renderNavBar: document.body.clientWidth > 700
   	});
   }.bind(this);

   setNavBarState();
   window.onresize = setNavBarState;

   }

   getAppBar(){
    let title = this.context.router.isActive('/home')? 'home':
    this.context.router.isActive('/account')? 'account':
    this.context.router.isActive('/about')? 'about':'about';
    return  ( <AppBar title = {title}  onLeftIconButtonTouchTap = {this._onleftIconButtonTouchTap.bind(this)}  />);
  }

  _onleftIconButtonTouchTap(){
      this.refs.leftNav.handleToggle();
  }

   render(){
   return (
   	 <MuiThemeProvider>
      <div className="app-wrap">
        {this.state.renderNavBar ? <Navbar />:this.getAppBar()}
        <AppLeftNav ref='leftNav' /> 
        {this.props.children}
        <div className="app-footer">我的地盘我做主gyt</div>
      </div> 
    </MuiThemeProvider>
   );
}
}


App.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default App;
