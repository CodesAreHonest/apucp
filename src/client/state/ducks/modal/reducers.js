import * as type from './types';
import { createReducer } from "../../util";

const initialState = {
    openStatus: false
};

const modalReducer = createReducer(initialState) ({
    [type.OPEN_MODAL]: (state) => ({
        ...state,
        openStatus: true,
    }),

    [type.CLOSE_MODAL]: (state) => ({
        ...state,
        openStatus: false,
    }),
});

export default modalReducer;