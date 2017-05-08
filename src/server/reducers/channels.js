const channel = (state = {}, action) => {
    switch (action && action.type) {

        case 'ADD_CHANNEL':
            return { id: action.id, name: action.name };

        default:
            return state;
    }
};

const channels = (state = [], action) => {
    switch (action && action.type) {

        case 'ADD_CHANNEL':
            return [...state, channel(null, action)];

        default:
            return state;

    }
};

export default channels;

export const getChannels = state => state;