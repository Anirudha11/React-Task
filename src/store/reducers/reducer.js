import * as actionTypes from '../actions/actions';
import loginData from '../json/login.json';
import dashboardData from '../json/dashboard.json';

const initialState = {
    username:'',
    password:'',
    error:'',
    isLoggedIn: false,
    jsonData:loginData,
    storeUsername:'',
    storePassword:''
  };


const reducer = (state=initialState, action) => {


    if ( action.type === actionTypes.USERNAME_HANDLER ) {

        if ( action.evt.target.value !== state.jsonData.username ) {
            return {
                ...state,
                username: action.evt.target.value,
                error: 'Invalid Credentials',
            };
        }
        
            return {
            ...state,
            username: action.evt.target.value
        };
    }

    if ( action.type === actionTypes.PASSWORD_HANDLER ) {

        if ( action.evt.target.value !== state.jsonData.password ) {
       
            return {
            ...state,
            password: action.evt.target.value,
            error:'Invalid Credentials'
            };
        }
        return {
            ...state,
            password: action.evt.target.value
        };
    }


    if ( action.type === actionTypes.LOGIN ) {

    action.evt.preventDefault();
    


        if ( !state.username ) {
            
            return {
                ...state,
                error:'Username is required'
            };
        }   

        if ( !state.password ) {
            
            return {
                ...state,
                error:'Password is required'
            };
        } 

        if ( state.username === state.jsonData.username && state.password === state.jsonData.password ) {
            return {
                ...state,
                isLoggedIn:true,
                error:'',
                jsonData:dashboardData
            };
        }

    }
   
    return state;   
}


export default reducer;