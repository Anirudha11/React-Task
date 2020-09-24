import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Login extends Component {
    
  constructor(props) {

    super(props);

  }


  render() {
   
    const errorFlag = this.props.error?<h1>{this.props.error}</h1>: null;
      return (
        <form onSubmit={this.props.submit}>
      
        {errorFlag}
          
        <label>Username</label>
        <Input type="text" value={this.props.username} changed={this.props.user} />

        <label>Password</label>
        <Input type="password" value={this.props.password} changed={this.props.pass} />

        <Button btnType="Success" clicked={this.props.submitHandler}>Login</Button>
      </form>
      );
  }

}

export default Login;
