import axios from 'axios';
import * as type from './types';

export const getPersonalAccount = (access_token) => dispatch => {

    const params = {
        access_token
    };

    axios.post('/api/admin/register', params)
        .then (response => {
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

export const postLogout = () => dispatch => {

    axios.post('/api/admin/logout')
        .then (response => {
            dispatch ({
                type: type.POST_LOGOUT,
                payload: response.data
            })
        })
        .catch (err => {
            dispatch ({
                type: type.POST_LOGOUT,
                payload: err.response.data
            })
        });
};