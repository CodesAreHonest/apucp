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

                DocumentStore.updateTag('confession').
                    then (() => {
                        return resolve({
                            response_code: 200,
                            response_msg: 'success'
                        })

                }).catch (err => {
                    return reject({
                        response_code: 500,
                        response_msg: err
                    })
                });

            })
        });
    }

    static getTotalRecords (query) {

        return Confession.countDocuments(query);
    }

    static async pendingList (page, pageSize) {

        const fields = "status tags content ip_address created_at";

        // pagination required to start from zero in mongoose
        const limit = parseInt(pageSize);
        const skip = (parseInt(page) - 1) * limit;
        const query = {status: 'pending'};

        const params = {
            skip, limit
        };

        let base = Confession.find(query, fields, params);

        let totalRecords = await this.getTotalRecords(query);

        return new Promise ((resolve, reject) => {

            base.exec((err, confessions) => {

                if (err) {
                    return reject({
                        'response_code': 500,
                        'response_msg': 'error on mongoose',
                        'data': err
                    });
                }

                const totalPages = Math.ceil(totalRecords / pageSize );

                const recordsFrom = skip + 1;
                const recordsEnd = skip + limit;
                const recordsTo = recordsEnd >= totalRecords ? totalRecords : recordsEnd;

                return resolve({
                    'response_code': 200,
                    'response_msg': 'success',
                    'totalRecords': totalRecords,
                    'totalPages':   totalPages,
                    'recordsFrom':  recordsFrom,
                    'recordsTo':    recordsTo,
                    'data':         confessions
                });
            })

        })
    }

    static getSelectedPendingListById (batchIds) {

        let query = Confession.find({
            '_id': { $in: batchIds }
        });

        return query.exec();
    }

    static approveConfession (id, postId, name) {

        const params = {
            status: 'approved',
            facebook_post_id: postId,
            updated_at: Date.now(),
            action_by: name
        };

        let query = Confession.findOneAndUpdate({'_id': id}, params);

        return query.exec();
    }

    static rejectConfession (pendingConfessions, name) {

        const conditions = {
            '_id': { $in: pendingConfessions }
        };

        const update = {
            status: 'reject',
            updated_at: Date.now(),
            action_by: name
        };

        let query = Confession.updateMany(conditions, update);

        return query.exec();
    }

    static async approvedList (page, pageSize, search = '') {

        const fields = "content tags action_by updated_at";

        // pagination required to start from zero in mongoose
        const limit = parseInt(pageSize);
        const skip = (parseInt(page) - 1) * limit;
        const query = {status: 'approved'};

        const params = {
            skip, limit
        };

        if (search !== '') {
            query.tags = { $regex: `.*${search}.*`}
        }

        let base = Confession.find(query, fields, params);

        let totalRecords = await this.getTotalRecords(query);

        return new Promise ((resolve, reject) => {

            base.exec((err, confessions) => {

                if (err) {
                    return reject({
                        'response_code': 500,
                        'response_msg': 'error on mongoose',
                        'data': err
                    });
                }

                const totalPages = Math.ceil(totalRecords / pageSize );

                const recordsFrom = skip + 1;
                const recordsEnd = skip + limit;
                const recordsTo = recordsEnd >= totalRecords ? totalRecords : recordsEnd;

                return resolve({
                    'response_code': 200,
                    'response_msg': 'success',
                    'totalRecords': totalRecords,
                    'totalPages':   totalPages,
                    'recordsFrom':  recordsFrom,
                    'recordsTo':    recordsTo,
                    'data':         confessions
                });
            })
        })

    }

    static async rejectList (page, pageSize, search = '') {

        const fields = "content tags action_by updated_at";

        // pagination required to start from zero in mongoose
        const limit = parseInt(pageSize);
        const skip = (parseInt(page) - 1) * limit;
        const query = {status: 'reject'};

        const params = {
            skip, limit
        };

        if (search !== '') {
            query.tags = { $regex: `.*${search}.*`}
        }

        let base = Confession.find(query, fields, params);

        let totalRecords = await this.getTotalRecords(query);

        return new Promise ((resolve, reject) => {

            base.exec((err, confessions) => {
                if (err) {
                    return reject ({
                        response_code: 500,
                        response_msg: 'error on mongoose',
                        data: err
                    })
                }

                const totalPages = Math.ceil(totalRecords / pageSize );

                const recordsFrom = skip + 1;
                const recordsEnd = skip + limit;
                const recordsTo = recordsEnd >= totalRecords ? totalRecords : recordsEnd;

                return resolve({
                    'response_code': 200,
                    'response_msg': 'success',
                    'totalRecords': totalRecords,
                    'totalPages':   totalPages,
                    'recordsFrom':  recordsFrom,
                    'recordsTo':    recordsTo,
                    'data':         confessions
                });
            })
        })

    }
}

export default ConfessionStore;
