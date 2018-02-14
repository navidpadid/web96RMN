export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";


export const signup = () => {
    return dispatch => {
        dispatch({
            type: SIGNUP
        });
    }
};

export const logout = () => {
    return dispatch => {
        dispatch({
            type: LOGOUT
        });
    }
};
