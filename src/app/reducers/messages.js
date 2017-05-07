const message = (state = {}, action) => {
    switch (action && action.type) {

    case 'SEND_MESSAGE':
        return { id: action.id, mine: true, sender: action.sender, channelId: action.channelId, body: action.body, timestamp: action.timestamp };

    case 'RECEIVE_MESSAGE':
        return { id: action.id, mine: false, sender: action.sender, channelId: action.channelId, body: action.body, timestamp: action.timestamp };

    default:
        return state;

    }
};

const messages = (state = [], action) => {
    switch (action && action.type) {

    case 'SEND_MESSAGE':
    case 'RECEIVE_MESSAGE':
        return [...state, message(null, action)];

    default:
        return state;

    }
};

export default messages;

export const getAllMessages = state => state;