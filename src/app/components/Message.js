const getTime = timestamp => {
    const date = new Date(timestamp);
    return date.toISOString().slice(-13, -5);
};

import style from '../styles/message.scss';

const Message = ({ body, timestamp }) => (
    <div>
        {body} <span className={style.timestamp}>{getTime(timestamp)}</span>
    </div>
);

export default Message;