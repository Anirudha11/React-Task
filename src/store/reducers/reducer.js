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

    if ( action.type === actionTypes.USERNAME_VALIDATION ) {
        if ( state.username !== state.jsonData.username ) {
            return {
                ...state,
                error: 'Invalid Credentials',
                storeUsername: action.evt.target.value
            }
        }
    }

    if ( action.type === actionTypes.PASSWORD_VALIDATION ) {
        if ( state.password !== state.jsonData.password ) {
            return {
                ...state,
                error: 'Invalid Credentials',
                storePassword: action.evt.target.value
            }
        }
    }

    if ( action.type === actionTypes.LOGIN ) {

    action.evt.preventDefault();
    console.log("bjhadbjhad",state);


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

        console.log(state.storeUsername,state.storePassword,"store");

    }
    // console.log(action.evt,"submit event")
       
    //     if ( action.evt.target.value !== state.jsonData.username ) {
                    
    //         return {
    //             ...state,
    //             error: 'Invalid Credentials'
    //         };
    // }



//     if ( action.evt.target.value !== state.jsonData.password ) {
                    
//         return {
//             ...state,
//             error: 'Invalid Credentials'
//         };
// }

       

    // if ( action.type === actionTypes.PASSWORD_VALIDATION ) {

    //     console.log("where am i?")
    //     // if ( state.password !== state.jsonData.password ) {
    //     if ( action.evt.target.value !== state.jsonData.password ) {
                            
    //         return {
    //             ...state,
    //             error: 'Invalid Credentials',
    //             storePassword: action.evt.target.value
    //         };
    //     }
    // }

    //         if ( action.type === actionTypes.USERNAME_VALIDATION ) {
        
    //             if ( action.evt.target.value !== state.jsonData.username ) {
                    
    //             return {
    //                 ...state,
    //                 error: 'Invalid Credentials',
    //             storeUsername: action.evt.target.value
                    
    //             };
    //     }
    // }

    return state;   
}


export default reducer;