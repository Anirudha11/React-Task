import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Login extends Component {
    
  constructor(props) {

    super(props);
    console.log(props,"props");

  }


  render() {
    console.log(this.props.error,"dimiss error")
    const errorFlag = this.props.error?<h1>{this.props.error}</h1>: null;
      return (
        <form onSubmit={this.props.submit}>
        {/* {
          this.props.error &&
          <h1 onClick={()=>this.props.dismissError}>
            <button onClick={()=>this.props.dismissError}>✖</button>
            {this.props.error}
          </h1>
        } */}
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
