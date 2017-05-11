import React, { Component } from 'react';
import Home from './Home';
import Navbar from './shared/Navbar';
import { AppBar } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppLeftNav from './shared/AppLeftNav';
import Header from './Header';
import Radium ,{StyleRoot} from 'radium';
import GoTotop from './goTotop';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index';


function mapStateToProps(state) {
  return {
    courses: state.courses,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


class App extends Component {

    constructor(props, context) {
        super(props, context);
    }
    componentWillMount() {
        let setNavBarState = function() {
            this.setState({
                renderNavBar: document.body.clientWidth > 700
            });
        }.bind(this);

        setNavBarState();
        window.onresize = setNavBarState;

    }
    getAppBar() {
        let title = this.context.router.isActive('/home') ? 'home' :
            this.context.router.isActive('/account') ? 'account' :
            this.context.router.isActive('/about') ? 'about' : 'about';
        return ( < AppBar title = { title }
            onLeftIconButtonTouchTap = { this._onleftIconButtonTouchTap.bind(this) }
            />);
        }

        _onleftIconButtonTouchTap() {
            this.refs.leftNav.handleToggle();
        }

    render() {
    return (
   	<MuiThemeProvider>
           {/*2. 第二部， 拿<StyleRoot> 来替换div标签*/}
       <StyleRoot className="app-wrap">
       <Header />
        {this.props.children}
        {/*布局文件包括header 和 footer */}
        <div className="app-footer">我的地盘我做主gyt</div>
        <GoTotop />
      </StyleRoot> 
    </MuiThemeProvider>
   );
  }
    }
    App.contextTypes = {
        router: React.PropTypes.object.isRequired
    };

// 1. 第一步，是在顶层标签下包裹
export default Radium(App);