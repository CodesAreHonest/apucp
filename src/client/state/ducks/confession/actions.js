import * as type from './types';
import axios from 'axios';
import { paramEncoding } from "../../util/encoding";

export const postSubmitConfession = confession => dispatch => {

    axios.post('/api/confession/postInsert', {
        'confession': confession
    }).then (response => {
        dispatch ({
            type: type.POST_SUBMIT_CONFESSION,
            payload: response.data
        })
    }).catch (err => {
        dispatch ({
            type: type.POST_SUBMIT_CONFESSION,
            payload: err.response.data
        })
    })
};

export const getPendingConfession = (page, limit) => dispatch => {

    const params = {
        page, limit
    };

    const queryString = paramEncoding(params);

    fetch (`/api/confession/getPendingList?${queryString}`)
        .then (response => response.json())
        .then(response => {

            dispatch({
                type: type.GET_PENDING_CONFESSIONS,
                payload: response
            })
        })
        .catch (err => {
            dispatch({
                type: type.GET_PENDING_CONFESSIONS,
                payload: err.response.data
            })
        })
};

export const incrementActivePage = activePage => dispatch => {

    const INCREMENTED_ACTIVE_PAGE = activePage + 1;

    dispatch ({
        type: type.INCREMENT_ACTIVE_PAGE,
        payload: INCREMENTED_ACTIVE_PAGE
    })

};

export const decrementActivePage = activePage => dispatch => {

    const DECREMENTED_ACTIVE_PAGE = activePage - 1;

    dispatch ({
        type: type.DECREMENT_ACTIVE_PAGE,
        payload: DECREMENTED_ACTIVE_PAGE
    })
};

export const selectPendingConfession = (confessionId) => dispatch => {

    dispatch ({
        type: type.SELECT_PENDING_CONFESSION,
        confessionId: confessionId
    });

};

export const deselectPendingConfession = (confessionId) => dispatch => {

    dispatch ({
        type: type.DESELECT_PENDING_CONFESSION,
        confessionId: confessionId
    });

};


