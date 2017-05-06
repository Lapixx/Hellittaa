import socketIO from 'socket.io';
import getUUID from 'uuid/v4';

const startSocketServer = server => {

    const io = socketIO(server);
    const connections = [];

    io.on('connection', socket => {
        connections.push(socket);

        socket.on('SEND_MESSAGE', action => {
            connections.filter(s => s !== socket).forEach(other => {
                other.emit('message', action);
            });
        });

        socket.on('CREATE_CHANNEL', action => {

            const data = { ...action, id: getUUID() };

            connections.forEach(other => {
                other.emit('channel', data);
            });
        });

        socket.on('disconnect', () => {
            const index = connections.indexOf(socket);
            connections.splice(index, 1);
        });

        socket.emit('channel', { name: 'General', id: getUUID() });
        socket.emit('channel', { name: 'Work', id: getUUID() });
        socket.emit('channel', { name: 'Random', id: getUUID() });
    });

    return server;
};

export default startSocketServer;