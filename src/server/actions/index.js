import getUUID from 'uuid/v4';

export const setNickname = (socket, nickname) => ({
    type: 'SET_NICKNAME',
    socket,
    nickname
});

export const sendMessage = (sender, channelId, body) => ({
    type: 'SEND_MESSAGE',
    id: getUUID(),
    timestamp: Date.now(),
    channelId,
    sender,
    body
});

export const addChannel = (name) => ({
    type: 'ADD_CHANNEL',
    id: getUUID(),
    name
});

export const addConnection = (socket) => ({
    type: 'ADD_CONNECTION',
    socket
});

export const removeConnection = (socket) => ({
    type: 'REMOVE_CONNECTION',
    socket
});