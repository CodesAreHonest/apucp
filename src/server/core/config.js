import dotenv from 'dotenv';
dotenv.config();

export default class Configuration {

    serverPort = process.env.serverPort || 8080;
    dbHost = null;
    dbPort = null;
    dbName = null;
    dbUsername = null;
    dbPassword = null;
    mongoConnectionString = null;

    localConfiguration() {

        this.dbHost = process.env.LOCAL_DBHOST || 'localhost';
        this.dbPort = process.env.LOCAL_DBPORT || 27017;
        this.dbName = process.env.LOCAL_DBNAME || 'apucp';
        this.dbUsername = process.env.LOCAL_DBUSERNANE;
        this.dbPassword = process.env.LOCAL_DBPASSWORD;
        this.mongoConnectionString = `mongodb://${this.dbUsername}:${this.dbPassword}@${this.dbHost}:${this.dbPort}/${this.dbName}?authSource=admin`;

        return {
            serverPort              : this.serverPort,
            dbHost                  : this.dbHost,
            dbPort                  : this.dbPort,
            dbName                  : this.dbName,
            dbUsername              : this.dbUsername,
            dbPassword              : this.dbPassword,
            mongoConnectionString   : this.mongoConnectionString
        }
    }

    productionConfiguration() {

        this.dbHost = process.env.PRODUCTION_DBHOST || 'cluster0-j9hhr.gcp.mongodb.net';
        this.dbPort = process.env.PRODUCTION_DBPORT || 27017;
        this.dbName = process.env.PRODUCTION_DBNAME || 'apucp';
        this.dbUsername = process.env.PRODUCTION_DBUSERNAME;
        this.dbPassword = process.env.PRODUCTION_DBPASSWORD;
        this.mongoConnectionString = `mongodb+srv://${this.dbUsername}:${this.dbPassword}@${this.dbHost}/${this.dbName}?authSource=admin;`;

        return {
            serverPort              : this.serverPort,
            dbHost                  : this.dbHost,
            dbPort                  : this.dbPort,
            dbName                  : this.dbName,
            dbUsername              : this.dbUsername,
            dbPassword              : this.dbPassword,
            mongoConnectionString   : this.mongoConnectionString

        }
    }

    loadConfiguration() {

        if (process.env.NODE_ENV === 'development') {
            return this.localConfiguration();
        }

        return this.productionConfiguration()
    }

}