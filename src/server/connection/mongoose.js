import mongoose from 'mongoose';
import Configuration from '../core/config';

class MongoConnection {

    static connect() {

        const configuration = new Configuration();
        const config = configuration.loadConfiguration();
        const { mongoConnectionString } = config;
        let connection = '';

        try {
            // const connectionString = `mongodb://yinghua:123@${dbHost}:${dbPort}/${dbName}?authSource=admin`;
            // const connectionString = `mongodb+srv://yinghua:123@cluster0-j9hhr.gcp.mongodb.net/${dbName}?authSource=admin;`;

            connection = mongoose.createConnection(mongoConnectionString, {
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