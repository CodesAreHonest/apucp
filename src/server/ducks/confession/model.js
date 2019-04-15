import mongoose from 'mongoose';
import moment from 'moment';
import MongoConnection from '../../connection/mongoose';

let schema = mongoose.Schema;
const mongo_connection = MongoConnection.connect();

const confessionSchema = schema ({
    tags: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    ip_address: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: moment().format('YYYY-MM-DD H:mm:ss'),
        required: false
    },
    updated_at: {
        type: Date,
        default: moment().format('YYYY-MM-DD H:mm:ss'),
        required: false
    }
});

const Model = mongo_connection.model('confession', confessionSchema);

export default Model;