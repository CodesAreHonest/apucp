import Admin from './model';
import Facebook from "./facebook";

class AdminStore {

    async obtain_facebook_information (personal_access_token) {

        const facebook = new Facebook();

        try {
            return await facebook.information (personal_access_token);
        }
        catch (err) {
            return err;
        }

        // const params = {
        //     user_id,
        // }

        // return new Promise ((resolve, reject) => {
        //
        //     Admin.update({'user_id': user_id}, params, {upsert: true}, (err) => {
        //         if (err) {
        //             return reject({
        //                 'response_code': 500,
        //                 'response_msg': 'error on mongoose',
        //                 'data': err
        //             });
        //         }
        //
        //         return resolve({
        //             'response_code': 200,
        //             'response_msg': 'success'
        //         });
        //     })
        // })

    }

    async insert_or_update (personal_access_token) {

        try {
            let facebook_information = await this.obtain_facebook_information(personal_access_token);
            console.log (facebook_information);

        }
        catch (err) {
            return err;
        }

    }

    async verify_facebook_page_permission (fb_personal_access_token) {

        let facebook = new Facebook();

        return new Promise((resolve, reject) => {

            facebook.accounts(fb_personal_access_token).then (response => {

                let page_access = response.find(account => account.id === '121412055027319');

                if (!page_access) {
                    return reject({
                        response_code: 403,
                        response_msg: `The user doesn't possess permission on page`
                    });
                }

                let { tasks } = page_access;

                let required_task = tasks.find(account => account === 'CREATE_CONTENT');

                if (!required_task) {
                    return reject({
                        response_code: 403,
                        response_msg: `User doesn't possess permission to CREATE CONTENT in page.`
                    })
                }

                let { access_token } = page_access;

                return resolve({
                    response_code: 200,
                    response_msg: 'Verification success. ',
                    fb_page_access_token: access_token
                });
            }).catch (err => {

                return reject ({
                    response_code: 500,
                    response_msg: 'Facebook Graph API Accounts Error',
                    error: err.error
                })
            });

        })


    }
}

export default AdminStore;