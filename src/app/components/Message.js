import { PropTypes } from 'prop-types';
import style from '../styles/message.scss';

const getTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toISOString().slice(-13, -5);
};

const Message = ({ sender, body, timestamp, mine }) => (
    <div className={style.message + ' ' + (mine ? style.mine : style.other)}>
        <div>
            <strong className={style.nick}>{sender}</strong> <span className={style.timestamp}>{getTime(timestamp)}</span>
        </div>
        <div>{body}</div>
    </div>
);

Message.propTypes = {
    sender: PropTypes.string.isRequired,
    mine: PropTypes.bool.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
};

export default Message;
