import mongoose from 'mongoose';
import config from '../core/config';

class MongoConnection {

    static connect() {
        const {dbHost, dbPort, dbName} = config;

        try {
            const connectionString = `mongodb://${dbHost}:${dbPort}/${dbName}`;

            mongoose.connect(connectionString, {
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