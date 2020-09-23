import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from './store/actions/actions';
import Login from './containers/Login/Login';
// import Dashboard from './components/Dashboard/Dashboard';

const Dashboard = React.lazy(()=>import('./components/Dashboard/Dashboard'));

class App extends Component {

  state = {
    username:'',
    password:'',
    error:'',
    isLoggedIn: false
  };


  dismissError() {
    this.setState({ error: '' });
  }

  submitHandler() {
    // event.preventDefault();
    console.log("bjhadbjhad");
    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    else {
      this.setState({isLoggedIn:true});
      return this.setState({ error: '' });
    }
  }

  userChangeHandler(event) {
    this.setState({
      username: event.target.value,
    });
    // console.log(this.state,"state");
  };

  passChangeHandler(event) {
    this.setState({
      password: event.target.value,
    });
  }


  render() {
    
    const loginUI =  <Login 
    {...this.state}
    pass={(event)=>this.passChangeHandler(event)}
    user={(event)=>this.userChangeHandler(event)}
    submit={this.props.submitHandler}
    />

    const dashUI =  <Suspense fallback={<h1>Loading...!!</h1>}>
    <Dashboard />
  </Suspense>

    let showUI = loginUI;

    if(this.state.isLoggedIn) {
     showUI = dashUI;    
    }
    else {
      showUI = loginUI;
    }

    return (
      <div>
        <BrowserRouter>
        <React.Fragment>
         {showUI}
        {/* <Route path="/" component={Login} /> */}
        </React.Fragment>
        </BrowserRouter>;
     </div>
  );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitHandler: ()=> dispatch({type: actionTypes.LOGIN})
  }
}

export default connect(null, mapDispatchToProps)(App);
