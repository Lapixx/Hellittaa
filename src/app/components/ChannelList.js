import { PropTypes } from 'prop-types';
import ChannelListItem from '../containers/ChannelListItem';

const ChannelList = ({ channels, activeChannelId, onChannelClick }) => (
    <div>
        {channels.map(
            channel =>
                (<ChannelListItem
                  key={channel.id}
                  {...channel}
                  onClick={() => onChannelClick(channel.id)}
                  isActive={activeChannelId === channel.id}
                />)
        )}
    </div>
);

ChannelList.propTypes = {
    channels: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    activeChannelId: PropTypes.string.isRequired,
    onChannelClick: PropTypes.func.isRequired
};

export default ChannelList;
