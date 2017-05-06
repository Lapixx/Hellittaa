import getUUID from 'uuid/v4';

export const receiveMessage = ({ id, timestamp, channelId, sender, body }) => ({
    type: 'RECEIVE_MESSAGE',
    id,
    timestamp,
    channelId,
    sender,
    body
});

export const receiveChannel = ({ id, name }) => ({
    type: 'RECEIVE_CHANNEL',
    id,
    name
});

export const sendMessage = (channelId, sender, body) => ({
    type: 'SEND_MESSAGE',
    id: getUUID(),
    timestamp: Date.now(),
    channelId,
    sender,
    body
});

export const createChannel = name => ({
    type: 'CREATE_CHANNEL',
    name
});

export const setChannel = channelId => ({
    type: 'SET_CHANNEL',
    channelId
});