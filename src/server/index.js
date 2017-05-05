import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 8080;

const app = express();

// log requests for debugging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

// serve static React app
app.use(express.static(path.resolve(__dirname, '..', 'app')));

// start listening
app.listen(PORT, () => {
    console.log(`--> Server started at http://localhost:${PORT}`);
});
