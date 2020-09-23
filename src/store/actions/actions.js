export const USERNAME_HANDLER = 'USERNAME_HANDLER';
export const PASSWORD_HANDLER = 'PASSWORD_HANDLER';
export const USERNAME_VALIDATION = 'USERNAME_VALIDATION';
export const PASSWORD_VALIDATION = 'PASSWORD_VALIDATION';
export const LOGIN = 'LOGIN';
export const DISMISS_ERROR = 'DISMISS_ERROR';


export const usernameHandler = (event) => {
    return {
        type: USERNAME_HANDLER,
        evt:event
    };
};

export const passwordHandler = (event) => {
    return {
            type: PASSWORD_HANDLER,
            evt: event
        };
};

export const usernameValidation = (event) => {
    return {
        type: USERNAME_VALIDATION,
        evt:event
    };
}

export const passwordValidation = (event) =>{
    return {
        type: PASSWORD_VALIDATION,
        evt:event
    };
}

export const login = (event) => {
    return {
            type: LOGIN,
            evt: event
        };
};

export const dismissError = () => {
    return {
        type: DISMISS_ERROR
    };
}