import { combineReducers } from 'redux';

import messages, * as fromMessages from './messages';
import channels, * as fromChannels from './channels';

export default combineReducers({
    messages,
    channels
});

export const getAllMessages = state => fromMessages.getAllMessages(state.messages);
export const getChannels = state => fromChannels.getAllChannels(state.channels);
export const getCurrentChannelId = state => fromChannels.getCurrentChannelId(state.channels);