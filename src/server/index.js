import expressServer from './expressServer';
import socketServer from './socketServer';


const server = expressServer();
const io = socketServer(server);

// start listening
const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`--> Server started at http://localhost:${port}`);
});