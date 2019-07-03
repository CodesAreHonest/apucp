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

    submitConfession (page_access_token, content) {

        return new Promise ((resolve, reject) => {
            axios.post('https://graph.facebook.com/v3.3/121412055027319/feed', {
                message: content,
                access_token: page_access_token
            }).then (response => {
                return resolve (response.data.id);
            }).catch (err => {
                return reject (err.response.data);
            })
        });
    }

    uploadPhotoToAlbum (page_access_token, content) {

        if (!content.isObject()) {
            throw new Error ('Content params is not object');
        }

        const album = 121432288358629;

        const params = {
            access_token: page_access_token,
            published: false
        };

        if (content.hasOwnProperty('file')) {
            params.file = content.file;
        }

        if (content.hasOwnProperty('url')) {
            params.url = content.url;
        }

        return new Promise ((resolve, reject) => {
            axios.post (`https://graph.facebook.com/v3.3/${album}/photos`, params)
                .then (response => {
                    return resolve(response.data.id);
                })
                .catch (err => {
                    return reject (err.response.data);
                })
        })
    }

}

export default Facebook;