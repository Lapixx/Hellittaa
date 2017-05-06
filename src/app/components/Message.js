import { PropTypes } from 'prop-types';
import style from '../styles/message.scss';

const getTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toISOString().slice(-13, -5);
};

const Message = ({ sender, body, timestamp }) => (
    <div>
        <strong>{sender}:</strong> {body} <span className={style.timestamp}>{getTime(timestamp)}</span>
    </div>
);

Message.propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
};

export default Message;
