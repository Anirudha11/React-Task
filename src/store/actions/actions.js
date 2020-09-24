export const USERNAME_HANDLER = 'USERNAME_HANDLER';
export const PASSWORD_HANDLER = 'PASSWORD_HANDLER';
export const LOGIN = 'LOGIN';


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

export const login = (event) => {
    return {
            type: LOGIN,
            evt: event
        };
};
