const emittableActions = [
    'SEND_MESSAGE',
    'CREATE_CHANNEL',
    'SET_NICKNAME'
];

// wraps the store.dispatch function to emit redux events to the server
const wrapDispatch = (io, dispatch) => {

    return action => {

        const { type, ...rest } = action;
        if (emittableActions.includes(type))
            io.emit(type, rest);

        return dispatch(action);
    };
};

export default wrapDispatch;