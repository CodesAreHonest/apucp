import axios from 'axios';
import * as type from './types';

export const getPersonalAccount = access_token => dispatch => {

    axios.post('/api/admin/register', {
        access_token
    }).then (response => {
        dispatch ({
            type: type.POST_GRAPH_ME_ACCOUNTS,
            payload: response.data
        });
    }).catch (err => {
        dispatch ({
            type: type.POST_GRAPH_ME_ACCOUNTS,
            payload: err.response.data
        });
    })
};