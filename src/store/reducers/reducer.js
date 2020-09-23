import * as actionTypes from '../actions/actions';
import loginData from '../json/login.json';
import dashboardData from '../json/dashboard.json';

const initialState = {
    username:'',
    password:'',
    error:'',
    isLoggedIn: false,
    jsonData:loginData
  };


const reducer = (state=initialState, action) => {
    console.log("hey",state);


    if ( action.type === actionTypes.USERNAME_HANDLER ) {
        
        return {
            ...state,
            username: action.evt.target.value
        };
    }

    if ( action.type === actionTypes.PASSWORD_HANDLER ) {

        return {
            ...state,
            password: action.evt.target.value
        };
    }

    // if ( action.type === actionTypes.USERNAME_VALIDATION ) {
    //     if ( state.username !== loginData.username ) {
    //         return {
    //             ...state,
    //             error: 'Invalid Credentials'
    //         }
    //     }
    // }

    // if ( action.type === actionTypes.PASSWORD_VALIDATION ) {
    //     if ( state.password !== loginData.password ) {
    //         return {
    //             ...state,
    //             error: 'Invalid Credentials'
    //         }
    //     }
    // }

    if ( action.type === actionTypes.LOGIN ) {

    action.evt.preventDefault();
    console.log("bjhadbjhad");


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

        if ( action.type === actionTypes.USERNAME_VALIDATION ) {
            if ( state.username !== loginData.username ) {
            

            return {
                ...state,
                error: 'Invalid Credentials'
            }
        }
    }
        if ( action.type === actionTypes.PASSWORD_VALIDATION ) {            
            if ( state.password !== loginData.password ) {
                
                return {
                    ...state,
                    error: 'Invalid Credentials'
                }
            }
        }
        console.log("what is the state here?",state);
        return {
              ...state,
              jsonData:dashboardData,
              isLoggedIn:true
            };
    }

    if ( action.type === actionTypes.DISMISS_ERROR ) {
        return {
            ...state,
            error:''
        };
    }

    return state;   
}


export default reducer;