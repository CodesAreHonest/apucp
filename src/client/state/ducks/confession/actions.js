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
                payload: response.data
            })
        })
        .catch (err => {
            dispatch({
                type: type.GET_PENDING_CONFESSIONS,
                payload: err.response.data
            })
        })
};


