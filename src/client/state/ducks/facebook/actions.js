import axios from 'axios';
import * as type from './types';

export const getPersonalAccount = access_token => dispatch => {

    axios.get('https://graph.facebook.com/v3.3/me/accounts', {
        params: {
            access_token
        }
    }).then (response => {
        dispatch ({
            type: type.POST_GRAPH_ME_ACCOUNTS,
            payload: response.data.data
        });
    }).catch (err => {
        console.log (err);
    })
};