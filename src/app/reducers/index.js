import { combineReducers } from 'redux';

import nickname, * as fromNickname from './nickname';
import messages, * as fromMessages from './messages';
import channels, * as fromChannels from './channels';
import unreadCounter, * as fromUnreadCounter from './unreadCounter';

export default combineReducers({
    nickname,
    messages,
    channels,
    unreadCounter
});

export const getNickname = state => fromNickname.getNickname(state.nickname);
export const getAllMessages = state => fromMessages.getAllMessages(state.messages);
export const getChannels = state => fromChannels.getAllChannels(state.channels);
export const getCurrentChannelId = state => fromChannels.getCurrentChannelId(state.channels);
export const getUnreadForChannel = (state, chanId) => fromUnreadCounter.getCountForChannel(state.unreadCounter, chanId);