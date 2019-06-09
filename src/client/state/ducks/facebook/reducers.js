import * as type from './types';
import { createReducer } from "../../util";

const initialState = {
    accounts: {}
};

const facebookReducer = createReducer(initialState) ({
    [type.POST_GRAPH_ME_ACCOUNTS]: (state, action) => ({
        ...state,
        accounts: action.payload,
    }),
});

export default facebookReducer;