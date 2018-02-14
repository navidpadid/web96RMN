import {STARTGAME} from "./onlineaction";


const initialState = {
    inGame: false,
    competitorId: null,
    indexId:null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case STARTGAME:
            return{
                ...state,
                inGame:true,
                competitorId: action.text,
                indexId: action.into
            };
        default:
            return state
    }
}
