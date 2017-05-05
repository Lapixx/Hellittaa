const getTime = timestamp => {
    const date = new Date(timestamp);
    return date.toISOString().slice(-13, -5);
};

const Message = ({ body, timestamp }) => (
    <div>
        {body} <span className="timestamp">{getTime(timestamp)}</span>
    </div>
);

export default Message;