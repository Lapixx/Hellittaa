import { PropTypes } from 'prop-types';
import ChannelListItem from './ChannelListItem';

const ChannelList = ({ channels, currentChannelId, onChannelClick }) => (
    <div>
        {channels.map(
            channel =>
                (<ChannelListItem
                  key={channel.id}
                  {...channel}
                  onClick={() => onChannelClick(channel.id)}
                  isActive={currentChannelId === channel.id}
                />)
        )}
    </div>
);

ChannelList.propTypes = {
    channels: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    currentChannelId: PropTypes.string.isRequired,
    onChannelClick: PropTypes.func.isRequired
};

export default ChannelList;
