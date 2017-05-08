const connection = (state = {}, action) => {
    switch (action && action.type) {

        case 'ADD_CONNECTION':
            return { socket: action.socket };

        case 'SET_NICKNAME':
            return state.socket === action.socket ? { ...state, nickname: action.nickname } : state;

        default:
            return state;
    }
};

const connections = (state = [], action) => {
    switch (action && action.type) {

        case 'ADD_CONNECTION':
            return [...state, connection(null, action)];

        case 'REMOVE_CONNECTION':
            const index = state
                .findIndex(c => c.socket === action.socket);
            return state
                .slice(0, index)
                .concat(
                    state.slice(index + 1)
                );

        case 'SET_NICKNAME':
            return state.map(c => connection(c, action));

        default:
            return state;

    }
};

export default connections;

export const getConnections = state => state;
export const getBySocket = (state, socket) => state.find(c => c.socket === socket);