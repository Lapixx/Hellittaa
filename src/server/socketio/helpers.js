import { getConnections } from '../reducers';

export const getAllSockets = state =>
    getConnections(state)
        .map(c => c.socket);

export const getOtherSockets = (state, mySocket) =>
    getAllSockets(state)
        .filter(s => s !== mySocket);

export const emitMulti = (sockets, event, data) =>
    sockets.forEach(
        sock => sock.emit(event, data)
    );

export const emitAll = (state, event, data) =>
    emitMulti(getAllSockets(state), event, data);

export const emitOthers = (state, mySocket, event, data) =>
    emitMulti(getOtherSockets(state, mySocket), event, data);