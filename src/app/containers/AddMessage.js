import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { getActiveChannel } from '../reducers';
import { sendMessage } from '../actions/index';
import MessageInput from '../components/MessageInput';

const mapStateToProps = state => ({
    channelId: getActiveChannel(state).id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSend: body => dispatch(sendMessage(ownProps.channelId, ownProps.nickname, body))
});

const AddMessage = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageInput);

AddMessage.propTypes = {
    label: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    channelId: PropTypes.string.isRequired
};

export default AddMessage;
