import Confession from './model';
import DocumentStore from '../documents/store';
import ip from "ip";

class ConfessionStore {

    static async insert(content) {

        let tag = await DocumentStore.getHashTag('confession');

        let params = {
            tags: tag,
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

                DocumentStore.updateTag('confession');

                return resolve({
                    'response_code': 200,
                    'response_msg': 'success'
                });

            })
        });
    }

    static pendingList (page, limit) {

        const fields = "-_id tags content ip_address created_at";

        const params = {
            skip: parseInt(page),
            limit: parseInt(limit)
        };

        return new Promise ((resolve, reject) => {

            Confession.find({status: 'pending'}, fields, params, (err, confessions) => {
                if (err) {
                    return reject({
                        'response_code': 500,
                        'response_msg': 'error on mongoose',
                        'data': err
                    });
                }

                return resolve({
                    'response_code': 200,
                    'response_msg': 'success',
                    'data': confessions
                });
            })

        })
    }
}

export default ConfessionStore;
