import socketIO from 'socket.io';
import handleEvents from './handleEvents';

const createIO = server => socketIO(server);

const startSocketServer = (server, store) => {

    const io = createIO(server);
    handleEvents(io, store);

    return io;
};

export default startSocketServer;