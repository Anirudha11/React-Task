import * as actionTypes from '../actions/actions';
import loginData from '../json/login.json';
import dashboardData from '../json/dashboard.json';

const loginReducer = (state=loginData, action) => {
    console.log("hey")
    if ( action.type === actionTypes.LOGIN ) {
        return {
            state:dashboardData      
        }
    }   
}


export default loginReducer;