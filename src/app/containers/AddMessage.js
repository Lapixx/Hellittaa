import { connect } from 'react-redux';

import { addMessage } from '../actions/index';
import MessageInput from '../components/MessageInput';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onSend: body => dispatch(addMessage(body))
});

const AddMessage = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageInput);

export default AddMessage;