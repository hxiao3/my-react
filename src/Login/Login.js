import React from "react";
import axios from 'axios';

import { Redirect } from 'react-router-dom'


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const logininfo = {userName:"test_register0",
            password:"testpassword"      
  };
    axios.post(
      'http://localhost:8080/MyReact/login',logininfo
    )
      .then(response => {
        //console.log(data)
        this.setState({users: response.data});
        console.log(this.state.users);
      })
      .catch(e => console.log('错误:', e))
  }
  render() {
    const loaded = false;
    const toProject = (<Redirect from="/login" to="/Resource"/>);
    return (
        <div>
        This is Login!
        <input type="button" value="点击 http-post 方式获取数据" onClickCapture={this.handleClick} />
        {loaded?toProject:null}
        </div>
    );
  }
}

export default Login;
