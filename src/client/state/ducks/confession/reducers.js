import * as type from './types';
import { createReducer } from "../../util";

const initialState = {
    submit_confession_response: {},
    pending_data: []
};

const homeReducer = createReducer(initialState) ({
    [type.POST_SUBMIT_CONFESSION]: (state,  action) => ({
        ...state,
        submit_confession_response: action.payload,
    }),

    [type.GET_PENDING_CONFESSIONS]: (state,  action) => ({
        ...state,
        pending_data: action.payload,
    })

});

export default homeReducer;