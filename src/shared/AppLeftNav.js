import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Drawer} from 'material-ui';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import SvgIcon from 'material-ui/SvgIcon';

let SelectableList = makeSelectable(List);

class AppLeftNav extends Component{

	constructor(props, context){

		super(props, context);
		this.state = {
			open: false,
			selectedIndex :'/home'
		};
	}

	handleToggle(){
		this.setState({open: !this.state.open});
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



  handleUpdateSelectedIndex(e, index) {
     this.context.router.push(index);
     console.log(index);
     this.setState({
       open: false,
       selectedIndex: index,
     });
   }

   handleTouchTapHeader() {
    this.context.router.push('/home');
    this.setState({open: false});
  }
	render(){
	   let styles = {
       header: {
         cursor: 'pointer',
         fontSize: '24px',
         color: '#fff',
        lineHeight: '64px',
         fontWeight: '300',
         backgroundColor: '#00bcd4',
         paddingLeft: '24px',
         paddingTop: '0px',
         marginBottom: '8px',
       },
       selectedList: {
         color: '#ff4081',
         backgroundColor: 'rgba(0, 0, 0, 0.03)',
       }
     };
		return(
			<MuiThemeProvider>
			<Drawer
			open={this.state.open} 
            docked={false}
            onRequestChange={(open) => this.setState({open})} >
             <div style={styles.header}
                  onTouchTap={this.handleTouchTapHeader.bind(this)}>
                  gyt
             </div>	
             <SelectableList style={styles.selectedList}
            value = {this.state.selectedIndex}
            onChange = {this.handleUpdateSelectedIndex.bind(this)} >
           <ListItem
             value="/home"
             primaryText="Home" />
           <ListItem
             value="/account"
             primaryText="Account" />
           <ListItem
             value="/about"
             primaryText="About" />
         </SelectableList>
            </Drawer>
			</MuiThemeProvider>
		);
	}
}

AppLeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default AppLeftNav;