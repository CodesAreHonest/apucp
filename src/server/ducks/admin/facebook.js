import axios from 'axios';
import FormData from 'form-data';
import querystring from 'querystring';

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

    submitConfession (page_access_token, content, attached_media) {

        return new Promise ((resolve, reject) => {
            axios.post('https://graph.facebook.com/v3.3/121412055027319/feed', {
                message: content,
                access_token: page_access_token,
                attached_media: attached_media
            }).then (response => {
                return resolve (response.data.id);
            }).catch (err => {
                console.log (err);
                return reject (err.response.data);
            })
        });
    }

    uploadPhotoToAlbum (page_access_token, content) {

        const album = 121432288358629;

        const formData = new FormData();

        formData.append('access_token', page_access_token);
        formData.append('published', 'false');

        if (content.hasOwnProperty('file')) {
            formData.append('file', content.file);
        }

        if (content.hasOwnProperty('url')) {
            formData.append('url', content.url);
        }

        return new Promise ((resolve, reject) => {
            axios({
                method: 'POST',
                url: `https://graph.facebook.com/v3.3/${album}/photos`,
                data: formData,
                headers: formData.getHeaders()
            }).then (response => {
                return resolve(response.data.id);
            }).catch (err => {
                return reject (err.response.data);
            })
        })
    }

}

export default Facebook;