import axios from 'axios';

export const verifyImageValidity = (url) => {

    return new Promise ((resolve, reject) => {

        axios({
            method: 'HEAD',
            url: url,
        }).then (response => {

            const headers = response.headers['content-type'];

            if (
                headers === 'image/png' ||
                headers === 'image/jpeg' ||
                headers === 'image/jpg'
            ) {
                resolve({
                    response_code: 200,
                    response_msg: 'URL is valid image.'
                });
            }

            reject({
                response_code: 403,
                response_msg: 'Image should be image/png, image/jpeg and image/jpg'
            });

        }).catch (err => {
            reject({
                response_code: 500,
                response_msg: err.response.data
            })
        })

    })

};