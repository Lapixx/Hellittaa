const nickname = (state = null, action) => {
    switch (action && action.type) {

        case 'SET_NICKNAME':
            return action.nickname;

        default:
            return state;

    }
};

export default nickname;

export const getNickname = state => state;