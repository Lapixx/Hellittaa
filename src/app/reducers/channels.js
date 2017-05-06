import { combineReducers } from 'redux';

const channel = (state = {}, action) => {
    switch (action && action.type) {

    case 'RECEIVE_CHANNEL':
        return { id: action.id, name: action.name };

    default:
        return state;

    }
};

const channels = (state = [], action) => {
    switch (action && action.type) {

    case 'RECEIVE_CHANNEL':
        return [...state, channel(null, action)];

    default:
        return state;

    }
};

const currentChannel = (state = '', action) => {
    switch (action && action.type) {

        case 'RECEIVE_CHANNEL':
            return state || action.id;

        case 'SET_CHANNEL':
            return action.channelId;

        default:
            return state;
    }
};

export default combineReducers({ channels, currentChannel });

export const getAllChannels = state => state.channels;
export const getCurrentChannelId = state => state.currentChannel;