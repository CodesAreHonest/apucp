import Admin from './model';

class AdminStore {

    static insert_or_update (user_id, name, email, picture, access_token) {

        const params = {
            user_id,
            name,
            email,
            picture,
            access_token
        };

        return new Promise ((resolve, reject) => {

            Admin.update({'user_id': user_id}, params, {upsert: true}, (err) => {
                if (err) {
                    return reject({
                        'response_code': 500,
                        'response_msg': 'error on mongoose',
                        'data': err
                    });
                }

                return resolve({
                    'response_code': 200,
                    'response_msg': 'success'
                });
            })
        })

    }
}

export default AdminStore;