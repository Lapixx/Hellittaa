import { connect } from 'react-redux';
import { getAllMessages, getCurrentChannelId } from '../reducers';
import Channel from '../components/Channel';

const mapStateToProps = (state, ownProps) => ({
    messages: getAllMessages(state),
    currentChannelId: getCurrentChannelId(state)
});

const CurrentChannel = connect(
    mapStateToProps
)(Channel);

export default CurrentChannel;
