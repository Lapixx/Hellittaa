import { PropTypes } from 'prop-types';

import MessageList from './MessageList';
import AddMessage from '../containers/AddMessage';

import style from '../styles/channel.scss';

const getVisibleMessages = (messages, channelId) => messages.filter(msg => msg.channelId === channelId);

const Channel = ({ messages, currentChannelId }) => (
    <div className={style.channel}>
        <div className={style.messages}>
            <MessageList messages={getVisibleMessages(messages, currentChannelId)} />
        </div>
        <div className={style.input}>
            <AddMessage label="Send" channelId={currentChannelId} nickname="Tijn" />
        </div>
    </div>
);

Channel.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired
    }).isRequired).isRequired,
    currentChannelId: PropTypes.string.isRequired
};

export default Channel;