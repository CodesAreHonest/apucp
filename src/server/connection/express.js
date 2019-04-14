import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressValidator from 'express-validator';
import morgan from 'morgan';
import route from '../routes/Route';

class Express {
    constructor() {
        this.app = express();
    }

    init() {

        this.app.use(express.static('dist'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(expressValidator());
        this.app.use('/', route);

        return this.app;
    }

}

export default Express;