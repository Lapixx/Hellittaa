import socketIO from 'socket.io';
import getUUID from 'uuid/v4';

const chans = ['General', 'Work', 'Random'].map(name => ({
    id: getUUID(),
    name
}));

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

        chans.forEach(c => socket.emit('channel', c));
    });

    return server;
};

export default startSocketServer;