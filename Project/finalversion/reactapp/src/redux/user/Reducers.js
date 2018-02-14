import {
    SIGNUP,LOGOUT
 }from './useractions'


const initialState = {
    isLoggedIn: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return{
                ...state,
                isLoggedIn:true
            };
        case LOGOUT:
            return{
                ...state,
                isLoggedIn:false
            };
        default:
            return state

        // case LOGGIN_REQUESTED:
        //     return{
        //         ...state,
        //         isMultpying: true
        //     };

        // case LOGIN:
        //     return {
        //         ...state,
        //         count: state.count + 1,
        //         isIncrementing: !state.isIncrementing
        //     };
        //
        // case EDIT_REQUESTED:
        //     return {
        //         ...state,
        //         isDecrementing: true
        //     }
        //
        // case EDIT:
        //     return {
        //         ...state,
        //         count: state.count - 1,
        //         isDecrementing: !state.isDecrementing
        //     };

        //

    }
}
