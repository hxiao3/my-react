import React from "react";
import { Redirect } from 'react-router-dom'


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    let userName = "test_register0";
    let password = "testpassword";
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, password })
  };
    fetch(
      'http://localhost:8080/MyReact/login',requestOptions
    )
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        this.setState({users: data});
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
        <input type="button" value="点击 http-get 方式获取数据" onClickCapture={this.handleClick} />
        {loaded?toProject:null}
        </div>
    );
  }
}

export default Login;
