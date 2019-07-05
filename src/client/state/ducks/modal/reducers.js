import * as type from './types';
import { createReducer } from "../../util";

const initialState = {
    openStatus: false
};

const homeReducer = createReducer(initialState) ({
    [type.OPEN_MODAL]: (state) => ({
        ...state,
        openStatus: true,
    }),

    [type.OPEN_MODAL]: (state) => ({
        ...state,
        openStatus: false,
    }),
});

export default homeReducer;