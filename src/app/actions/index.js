import getUUID from 'uuid/v4';

export const sendMessage = (channelId, sender, body) => ({
    type: 'ADD_MESSAGE',
    id: getUUID(),
    timestamp: Date.now(),
    channelId,
    sender,
    body
});

export const createChannel = name => ({
    type: 'CREATE_CHANNEL',
    id: getUUID(),
    name
});

export const setChannel = channelId => ({
    type: 'SET_CHANNEL',
    channelId
});