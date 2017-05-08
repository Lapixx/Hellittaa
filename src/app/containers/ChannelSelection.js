import { connect } from 'react-redux';

import { setChannel, createChannel } from '../actions';
import { getChannels, getActiveChannel } from '../reducers';

import ChannelList from '../components/ChannelList';

const mapStateToProps = (state, ownProps) => ({
    channels: getChannels(state),
    activeChannelId: getActiveChannel(state).id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChannelClick: channelId => dispatch(setChannel(channelId)),
    onCreateNewChannel: name => dispatch(createChannel(name))
});

const ChannelSelection = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelList);

export default ChannelSelection;
