import mongoose from 'mongoose';
import Configuration from '../core/config';

class MongoConnection {

    static createConnection() {

        const configuration = new Configuration();
        const config = configuration.loadConfiguration();
        const {
            mongoConnectionString
        } = config;

        try {
            let connection = mongoose.createConnection(mongoConnectionString, {
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true,
                useUnifiedTopology: true
            });

            console.log(connection);

            return connection;
        } catch (err) {
            console.log(`error connection to mongodb ${err}`);
            process.exit(1);
        }

    }
}

export default MongoConnection;