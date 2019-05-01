import mongoose from 'mongoose';
import MongoConnection from '../../connection/mongoose';

let schema = mongoose.Schema;
const mongoConnection = MongoConnection.connect();

const documentSchema = schema ({
    document_type: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    number: {
        type: Number,
        required: true,
    },
    prefix: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    document_length: {
        type: Number,
        required: true
    }
});

const Document = mongoConnection.model('documents', documentSchema);

export default Document;