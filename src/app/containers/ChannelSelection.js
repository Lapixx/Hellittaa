import { connect } from 'react-redux';

import { setChannel } from '../actions';
import { getChannels, getActiveChannel } from '../reducers';

import ChannelList from '../components/ChannelList';

const mapStateToProps = (state, ownProps) => ({
    channels: getChannels(state),
    activeChannelId: getActiveChannel(state).id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChannelClick: channelId => dispatch(setChannel(channelId))
});

const ChannelSelection = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelList);

export default ChannelSelection;
