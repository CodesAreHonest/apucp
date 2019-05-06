import * as type from './types';
import { createReducer } from "../../util";

const initialState = {
    submit_confession_response: {},
};

const homeReducer = createReducer(initialState) ({
    [type.POST_SUBMIT_CONFESSION]: (state,  action) => ({
        ...state,
        submit_confession_response: action.payload,
    })

});

export default homeReducer;