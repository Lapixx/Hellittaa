import { connect } from 'react-redux';
import { getAllMessages, getActiveChannel } from '../reducers';
import Channel from '../components/Channel';

const mapStateToProps = (state, ownProps) => ({
    messages: getAllMessages(state),
    channelId: getActiveChannel(state).id
});

const CurrentChannel = connect(
    mapStateToProps
)(Channel);

export default CurrentChannel;
