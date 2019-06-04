import * as type from './types';
import { createReducer } from "../../util";

const initialState = {
    submit_confession_response: {},
    data: [],
    recordsFrom: 0,
    recordsTo: 0,
    totalPages: 0,
    totalRecords: 0,

    activePage: 1,
    recordsPerPage: 10,
};

const homeReducer = createReducer(initialState) ({
    [type.POST_SUBMIT_CONFESSION]: (state,  action) => ({
        ...state,
        submit_confession_response: action.payload,
    }),

    [type.GET_PENDING_CONFESSIONS]: (state,  action) => ({
        ...state,
        data: action.payload.data,
        recordsFrom: action.payload.recordsFrom,
        recordsTo: action.payload.recordsTo,
        totalPages: action.payload.totalPages,
        totalRecords: action.payload.totalRecords,
    }),

    [type.INCREMENT_ACTIVE_PAGE]: (state, action) => ({
        ...state,
        activePage: action.payload
    }),

    [type.DECREMENT_ACTIVE_PAGE]: (state, action) => ({
        ...state,
        activePage: action.payload
    })

});

export default homeReducer;