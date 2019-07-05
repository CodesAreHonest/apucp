import express from 'express';
import cors from 'cors';
import expressValidator from 'express-validator';
import morgan from 'morgan';
import router from '../ducks/index.js';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';
import uuid from 'uuid';
import Configuration from '../core/config';

import { SessionExpired } from "./session";

const MongoStore = require('connect-mongo')(session);


class Express {
    constructor() {
        this.app = express();
    }

    init() {

        this.app.use(express.static('dist'));
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(expressValidator());
        this.sessions();
        this.app.use('/api', router);
        this.app.use('/admin', SessionExpired);

        this.serveImage();
        this.serveReact();

        return this.app;
    }

    serveImage() {
        this.app.get('/images/*', (req, res) => {
            const requestUrl = req.url.split('/')[2];
            const appRoot = process.env.PWD;
            const imagePath = `${appRoot}/storage/confession/${requestUrl}`;
            res.sendFile(imagePath);
        });
    }

    serveReact() {

        this.app.get('/*', (req, res) => {
            res.set('content-type', 'text/html');
            res.sendFile(path.resolve() + '/public/index.html');
        });
    }

    sessions() {

        const configuration = new Configuration();
        const { mongoConnectionString } = configuration.loadConfiguration();

        this.app.use(session({
            genid: () => {
                return uuid();
            },
            secret: 'thisisasecret',
            resave: true,
            saveUninitialized: true,
            store: new MongoStore({
                url: mongoConnectionString
            })
        }));

    }

    close() {
        this.app.close();
    }
}

export default Express;