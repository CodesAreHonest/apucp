import axios from 'axios';

class Facebook {

    accounts (access_token) {

        return new Promise ((resolve, reject) => {
            axios.get('https://graph.facebook.com/v3.3/me/accounts', {
                params: {
                    access_token
                }
            }).then (response => {
                return resolve(response.data.data);
            }).catch (err => {
                return reject(err.response.data);
            })
        })

    }

    information (access_token) {

        return new Promise ((resolve, reject) => {
            axios.get('https://graph.facebook.com/v3.3/me', {
                params: {
                    access_token: access_token,
                    fields: 'id,name,email'
                }
            }).then (response => {
                return resolve(response.data);
            }).catch (err => {
                return reject(err.response.data);
            })
        })

    }
}

export default Facebook;