import { PropTypes } from 'prop-types';

import MessageList from './MessageList';
import AddMessage from '../containers/AddMessage';

import style from '../styles/channel.scss';

const getVisibleMessages = (messages, channelId) => messages.filter(msg => msg.channelId === channelId);

const Channel = ({ nickname, messages, channelId }) => (
    <div className={style.channel}>
        <div className={style.messages}>
            <MessageList messages={getVisibleMessages(messages, channelId)} />
        </div>
        <div className={style.input}>
            <AddMessage label="Send" channelId={channelId} nickname={nickname} />
        </div>
    </div>
);

Channel.propTypes = {
    nickname: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired
    }).isRequired).isRequired,
    channelId: PropTypes.string.isRequired
};

export default Channel;