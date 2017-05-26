import React, { Component } from 'react';
import Home from './Home';
import Navbar from './shared/Navbar';
import { AppBar } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppLeftNav from './shared/AppLeftNav';
import Header from './Header';
import Radium ,{StyleRoot} from 'radium';
import GoTotop from './goTotop';
import ItemCates from './Itemcates';

import { changeShow } from './actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index';
import Popups from './tools/Popups';


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
        console.log('顶级：', this.props.status )
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
       {/* 点击工具展示一个div */}
       <ItemCates {...this.props.data} />
        {this.props.children}
        {/*布局文件包括header 和 footer */}
        <div className="app-footer">我的地盘我做主gyt</div>
        {/* 点击返回顶部的按钮 */}
        <GoTotop />
        <Popups {...this.props.data}/>
      </StyleRoot> 
    </MuiThemeProvider>
   );
  }
    }
    App.contextTypes = {
        router: React.PropTypes.object.isRequired
    };


function mapDispatchToProps(dispatch) {
    return({
        rotate: () => {dispatch(changeShow)},
    })
}

// 1. 第一步，是在顶层标签下包裹

// 第二个参数  将 action 作为 props 绑定到APP
export default connect(state => {
    // 把此时的state赋值给了status这个key
    // 这个地方的值都传了 
   console.log('传递的值：', state)
  return {
      data : state
  }
}, mapDispatchToProps)(Radium(App))
//将 action 作为 props 绑定到 App 上。
// 也就是传给子组件一个dispatch 的方法， 
// export default Radium(App);
    
    
    // Radium(App);