import * as type from './types';
import { createReducer } from "../../util";

const initialState = {
    accounts: {},

    logoutResponse: []
};

const facebookReducer = createReducer(initialState) ({
    [type.POST_GRAPH_ME_ACCOUNTS]: (state, action) => ({
        ...state,
        accounts: action.payload,
    }),

    [type.POST_LOGOUT]: (state, action) => ({
        ...state,
        logoutResponse: action.payload,
    }),
});

export default facebookReducer;