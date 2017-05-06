import socketIO from 'socket.io-client';
import wrapDispatch from './wrapDispatch';
import dispatchEvents from './dispatchEvents';

// creates a new socketio client
const createIO = () => socketIO.connect(`${location.protocol}//${location.host}`);

// connects the redux store to the io socket
const connectIO = (store) => {

    const io = createIO();
    const originalDispatch = store.dispatch;

    store.dispatch = wrapDispatch(io, originalDispatch);
    dispatchEvents(io, originalDispatch);
};

export default connectIO;