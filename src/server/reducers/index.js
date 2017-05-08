import { combineReducers } from 'redux';

import connections, * as fromConnections from './connections';
import channels, * as fromChannels from './channels';

export default combineReducers({
    connections,
    channels
});

export const getConnections = state => fromConnections.getConnections(state.connections);
export const getConnectionBySocket = (state, socket) => fromConnections.getBySocket(state.connections, socket);
export const getChannels = state => fromChannels.getChannels(state.channels);
