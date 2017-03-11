import React, {Component} from 'react';
import {FlatButton, TextField, Card} from 'material-ui';
import axios from 'axios';
import isEmpty from 'lodash';
import UserInfo from './user/UserInfo';
import github from './utils/github';
import Repos from './user/Repos';

class Account extends Component{

   constructor(props){
     super(props);
     this.state = {
     	user: {},
      repos: {}
     }
   }

  isEmpty(value) {
    return Object.keys(value).length === 0;
  }
	handleSumit(e){
		e.preventDefault();	
		const account = this.refs.account.getValue();
		github.getGithubInfo(account).then((data) => {
      this.setState({
      user: data.user,
      repos: data.repos
    });
    });
	}
	render(){

	     let GitHubInfo;
       if(!this.isEmpty(this.state.user)){
        console.log('123' + JSON.stringify(this.state.repos));
          GitHubInfo = (
        <div>
         <UserInfo userInfo={this.state.user} />
         <Repos repos={this.state.repos} />
        </div>
       );
    }
	   return(
       <div className="account">
        <Card className='content'>
        <form onSubmit={this.handleSumit.bind(this)}>
         <TextField id="textField" 	
                    hintText="你的名字"
                    ref="account"
                    />
         <FlatButton label="提交" 
                     primary={true} 
                     type="submit" />
        </form>
        </Card>
    {GitHubInfo}
       </div>
    );
  }
}
export default Account;