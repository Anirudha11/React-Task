import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Login extends Component {
    
  constructor(props) {

    super(props);
    console.log(props,"props");

  }


  render() {

      return (
        <form onSubmit={this.props.submit}>
        {
          this.props.error &&
          <h1 onClick={()=>this.dismissError}>
            <button onClick={()=>this.dismissError}>✖</button>
            {this.props.error}
          </h1>
        }
        <label>Username</label>
        <Input type="text" value={this.props.username} changed={this.props.user} />

        <label>Password</label>
        <Input type="password" value={this.props.password} changed={this.props.pass} />

        <Button btnType="Success">Login</Button>
      </form>
      );
  }

}

export default Login;
