export const STARTGAME = "STARTGAME";
export const ENDGAME = "ENDGAME";


export const startgame = (text,into) => {
    return dispatch => {
        dispatch({
            type: STARTGAME,
            text,
            into
        });
    }
};

export const endgame = () => {
    return dispatch => {
        dispatch({
            type: ENDGAME
        });
    }
};
