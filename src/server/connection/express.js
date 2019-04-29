import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressValidator from 'express-validator';
import morgan from 'morgan';
import router from '../ducks/index.js';
import path from 'path';

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
        this.app.use('/api', router);

        this.app.get('/hi', (req, res) => {
            res.status(200).send({'outcomes': 'hi'});
        });

        this.app.get('/*', (req, res) => {
            res.set('content-type', 'text/html');
            res.sendFile(path.resolve() + '/public/index.html');
        });

        return this.app;
    }

    close() {
        this.app.close();
    }
}

export default Express;