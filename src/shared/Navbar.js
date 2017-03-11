import React , {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

class Navbar extends Component {
  constructor(props, context) {
    super(props, context);
    // this.state = {
    //   value: '/home'
    // }
  }
  componentWillMount(){
    console.log('willmount')
    this.setState({
      value: this.getselectedIndex()
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      value: this.getselectedIndex()
    });
  }

  getselectedIndex(){
    return this.context.router.isActive('/home')? '/home':
    this.context.router.isActive('/account')? '/account':
    this.context.router.isActive('/about')? '/about':'/about';
  }
  handleTabsChange(value){
    this.context.router.push(value);
  }

  render(){

   return(
    <MuiThemeProvider>
    <Tabs onChange={this.handleTabsChange.bind(this)} value={this.state.value}>
    <Tab label="Home" value="/home">     
    </Tab>
    <Tab label="Account" value="/account">    
    </Tab>
    <Tab
    label="About" value="/about">
    </Tab>
    </Tabs>
    </MuiThemeProvider>
    );
  }

}

Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default Navbar;