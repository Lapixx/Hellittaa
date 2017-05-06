import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentChannelId } from '../reducers';
import { sendMessage } from '../actions/index';
import MessageInput from '../components/MessageInput';

const mapStateToProps = state => ({
    channelId: getCurrentChannelId(state)
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
