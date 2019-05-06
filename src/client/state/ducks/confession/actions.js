import * as type from './types';
import axios from 'axios';

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


