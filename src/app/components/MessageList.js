import { PropTypes } from 'prop-types';
import Message from './Message';

const MessageList = ({ messages }) => (
    <div>
        {messages.map(
            message =>
                <Message key={message.id} {...message} />
        )}
    </div>
);

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default MessageList;
