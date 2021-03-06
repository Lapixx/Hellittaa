import { getChannels, getConnectionBySocket } from '../reducers';
import { setNickname, addConnection, removeConnection, sendMessage, addChannel } from '../actions';

// listens for incoming ioevents and handle them
const dispatchEvents = (io, store) => {

    io.on('connection', socket => {

        store.dispatch(addConnection(socket));

        socket.on('SET_NICKNAME', ev => {
            store.dispatch(setNickname(socket, ev.nickname));
        });

        socket.on('SEND_MESSAGE', ev => {

            const state = store.getState();

            const nick = getConnectionBySocket(state, socket).nickname;
            const action = sendMessage(nick, ev.channelId, ev.body);
            store.dispatch(action);

            // send to all other sockets
            socket.broadcast.emit('message', action);
        });

        socket.on('CREATE_CHANNEL', ev => {

            const action = addChannel(ev.name);
            store.dispatch(action);

            // send to all sockets
            io.emit('channel', action);
        });

        socket.on('disconnect', () => {

            store.dispatch(removeConnection(socket));
        });

        // send all channels on connect
        const state = store.getState();
        getChannels(state).forEach(
            chan => socket.emit('channel', chan)
        );
    });
};

export default dispatchEvents;