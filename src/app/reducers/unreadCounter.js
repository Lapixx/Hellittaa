const channel = (state = {}, action) => {
    switch (action && action.type) {

    case 'RECEIVE_CHANNEL':
        return { id: action.id, count: 0 };

    case 'RECEIVE_MESSAGE':
        return action.channelId === state.id && !state.active ?
            { ...state, count: state.count + 1 } :
            state;

    case 'SET_CHANNEL':
        return action.channelId === state.id ?
            { ...state, count: 0, active: true } :
            { ...state, active: false};

    default:
        return state;

    }
};

const unreadCounter = (state = [], action) => {
    switch (action && action.type) {

    case 'RECEIVE_CHANNEL':
        return [...state, channel(null, action)];

    case 'RECEIVE_MESSAGE':
        return state.map(c => channel(c, action));

    case 'SET_CHANNEL':
        return state.map(c => channel(c, action));

    default:
        return state;

    }
};

export default unreadCounter;

export const getCountForChannel = (state, chanId) => state.find(c => c.id === chanId).count;