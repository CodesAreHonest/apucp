import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import * as reducers from "./ducks";

const rootReducer = (state, action) => {
    return combineReducers(reducers)(state, action);
};

export default createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);