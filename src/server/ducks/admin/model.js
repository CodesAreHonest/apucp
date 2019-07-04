import mongoose from 'mongoose';
import moment from 'moment-timezone';
import MongoConnection from '../../connection/mongoose';

let schema = mongoose.Schema;
const mongo_connection = MongoConnection.createConnection();

const dateMalaysia = moment.tz(Date.now(), "Asia/Kuala_Lumpur");

const adminSchema = schema ({
    user_id: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    access_token: {
        type: String,
        required: true
    },
    page_access_token: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: dateMalaysia,
        required: false
    },
    updated_at: {
        type: Date,
        default: dateMalaysia,
        required: false
    }
});

const Model = mongo_connection.model('admin', adminSchema);

export default Model;