import express from 'express';
import cors from 'cors';
import expressValidator from 'express-validator';
import morgan from 'morgan';
import router from '../ducks/index.js';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';
import uuid from 'uuid';

import { SessionExpired } from "./session";

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
        this.app.use(session({
            genid: () => {
                return uuid();
            },
            secret: 'thisisasecret',
            resave: true,
            saveUninitialized: true
        }));
        this.app.use('/api', router);
        this.app.use('/admin/*', SessionExpired);

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