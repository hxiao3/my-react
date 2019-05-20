import React from "react";
import { Redirect } from 'react-router-dom'


class Login extends React.Component {
 
  render() {
    const loaded = false;
    const toProject = (<Redirect from="/login" to="/Project"/>);
    return (
        <div>
        This is Login!
        {loaded?toProject:null}
        </div>
    );
  }
}

export default Login;
