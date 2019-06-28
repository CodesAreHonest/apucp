import mongoose from 'mongoose';
import config from '../core/config';

class MongoConnection {

    static connect() {
        const {dbHost, dbPort, dbName} = config;
        let connection = '';

        try {
            // const connectionString = `mongodb://${dbHost}:${dbPort}/${dbName}?authSource=admin`;
            const connectionString = `mongodb+srv://yinghua:123@cluster0-j9hhr.gcp.mongodb.net/${dbName}?authSource=admin;`;

            connection = mongoose.createConnection(connectionString, {
                useNewUrlParser : true,
                useFindAndModify: false,
                useCreateIndex: true
            });
        }
        catch (err) {
            console.log (`error connection to mongodb ${err}`);
            process.exit(1);
        }

        return connection;

    }
}

export default MongoConnection;