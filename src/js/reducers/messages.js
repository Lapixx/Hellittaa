const message = (state = {}, action) => {
    switch (action && action.type) {

        case 'ADD_MESSAGE':
            return { id: action.id, body: action.body, timestamp: action.timestamp };

        default:
            return state;

    }
};

const messages = (state = [], action) => {
    switch (action && action.type) {

        case 'ADD_MESSAGE':
            return [ ...state, message(null, action) ];

        default:
            return state;

    }
};

export default messages;