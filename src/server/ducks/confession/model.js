import mongoose from 'mongoose';
import moment from 'moment-timezone';
import MongoConnection from '../../connection/mongoose';

delete mongoose.connection.models['confessions'];

let schema = mongoose.Schema;
const mongo_connection = MongoConnection.createConnection();

const dateMalaysia = moment.tz(Date.now(), "Asia/Kuala_Lumpur");

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
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'reject', 'approved'],
        required: false,
    },
    action_by: {
        type: String,
        default: null,
        required: false
    },
    facebook_post_id: {
        type: String,
        required: false
    },
    images: {
        type: [{
            fieldname: String,
            originalname: String,
            encoding: String,
            mimetype: String,
            destination: String,
            filename: String,
            path: String,
            size: Number
        }],
        required: false
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

const Model = mongo_connection.model('confessions', confessionSchema);

export default Model;