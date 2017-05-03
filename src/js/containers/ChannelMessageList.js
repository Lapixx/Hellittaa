import { connect } from 'react-redux';

import MessageList from '../components/MessageList';

const mapStateToProps = (state, ownProps) => ({
    messages: state.messages
});

const ChannelMessageList = connect(
    mapStateToProps
)(MessageList);

export default ChannelMessageList;