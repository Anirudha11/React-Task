import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from './store/actions/actions';
import Login from './containers/Login/Login';

const Dashboard = React.lazy(()=>import('./components/Dashboard/Dashboard'));

class App extends Component {

  render() {
    
    const loginUI =  <Login 
    {...this.state}
    // pass={(event)=>this.passChangeHandler(event)}
    // user={(event)=>this.userChangeHandler(event)}
    user={this.props.userChangeHandler}
    pass={this.props.passChangeHandler}
    submit={this.props.submitHandler}
    error={this.props.error}
    dismissError={this.props.dismissError}
    />

    const dashUI =  <Suspense fallback={<h1>Loading...!!</h1>}>
    <Dashboard users={this.props.jsonData} />
  </Suspense>

    let showUI = loginUI;

    if(this.props.isLoggedIn) {
      
     showUI = dashUI;    

    }

    else {
        
      showUI = loginUI;
      
    }

    return (
      <div>
        <React.Fragment>
         {showUI}
        </React.Fragment>
     </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
   username:state.username,
   password:state.password,
   error:state.error,
   isLoggedIn:state.isLoggedIn,
   jsonData:state.jsonData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitHandler: (event)=> dispatch({type: actionTypes.LOGIN, evt:event}),
    userChangeHandler: (event)=> dispatch({type: actionTypes.USERNAME_HANDLER, evt:event}),
    passChangeHandler: (event)=> dispatch({type: actionTypes.PASSWORD_HANDLER, evt:event}), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
