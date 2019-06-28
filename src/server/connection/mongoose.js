import mongoose from 'mongoose';
import config from '../core/config';

class MongoConnection {

    static connect() {
        const {dbHost, dbPort, dbName} = config;

        try {
            // const connectionString = `mongodb://${dbHost}:${dbPort}/${dbName}?authSource=admin`;
            const connectionString = `mongodb+srv://cluster0-j9hhr.gcp.mongodb.net/${dbName}?authSource=admin;`;

            mongoose.connect(connectionString, {
                user: 'yinghua',
                pass: '123',
                useNewUrlParser : true,
                useFindAndModify: false,
                useCreateIndex: true
            });
        }
        catch (err) {
            console.log (`error connection to mongodb ${err}`)
        }

        return mongoose;

    }
}

export default MongoConnection;