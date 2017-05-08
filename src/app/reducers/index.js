import { combineReducers } from 'redux';

import nickname, * as fromNickname from './nickname';
import messages, * as fromMessages from './messages';
import channels, * as fromChannels from './channels';

export default combineReducers({
    nickname,
    messages,
    channels
});

export const getNickname = state => fromNickname.getNickname(state.nickname);
export const getAllMessages = state => fromMessages.getAllMessages(state.messages);
export const getChannels = state => fromChannels.getAllChannels(state.channels);
export const getActiveChannel = state => fromChannels.getActiveChannel(state.channels);
export const getUnreadForChannel = (state, chanId) => fromChannels.getCountForChannel(state.channels, chanId);