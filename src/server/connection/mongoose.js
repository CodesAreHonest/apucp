import mongoose from 'mongoose';
import Configuration from '../core/config';

class MongoConnection {

    static createConnection() {

        const configuration = new Configuration();
        const config = configuration.loadConfiguration();
        const { mongoConnectionString } = config;
        let connection = '';

        try {
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