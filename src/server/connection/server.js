import http from 'http';

import config from '../core/config';
import Express from './express';

class Server {

    init() {

        const port = config.serverPort;
        const app = new Express();
        const express = app.init();
        const server = http.createServer(express);

        server.listen(port, () => {
            console.log (`Server is running on port ${port}`);
        });
    }
}

const server = new Server;
server.init();

export default server;