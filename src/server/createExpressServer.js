import http from 'http';
import express from 'express';
import path from 'path';

const startExpressServer = () => {

    const app = express();
    const server = http.Server(app);

    // log requests for debugging
    app.use((req, res, next) => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
        next();
    });

    // serve static React app
    app.use(express.static(path.resolve(__dirname, '..', 'app')));

    return server;
};

export default startExpressServer;