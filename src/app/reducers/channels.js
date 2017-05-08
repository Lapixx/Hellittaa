const channel = (state = {}, action) => {
    switch (action && action.type) {

        case 'RECEIVE_CHANNEL':
            return { id: action.id, name: action.name, count: 0, active: false };

        case 'RECEIVE_MESSAGE':
            return action.channelId === state.id && !state.active ?
                { ...state, count: state.count + 1 } :
                state;

        case 'SET_CHANNEL':
            return action.channelId === state.id ?
                { ...state, count: 0, active: true } :
                { ...state, active: false };

        default:
            return state;
    }
};

const channels = (state = [], action) => {
    switch (action && action.type) {

        case 'RECEIVE_CHANNEL':
            const newChan = channel(null, action);
            if (state.length === 0)
                newChan.active = true;
            return [...state, newChan];

        case 'RECEIVE_MESSAGE':
        case 'SET_CHANNEL':
            return state.map(c => channel(c, action));

        default:
            return state;
    }
};

export default channels;

export const getAllChannels = state => state;
export const getCountForChannel = (state, chanId) => state.find(c => c.id === chanId).count;
export const getActiveChannel = state => state.find(c => c.active);