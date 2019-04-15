import Confession from './model';
import ip from "ip";

class Store {

    static insert(content) {

        let params = {
            tags: '#1',
            content: content,
            ip_address: ip.address(),
        };

        let confession = new Confession(params);

        return new Promise ((resolve, reject) => {
            confession.save(err => {

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

export default Store;
