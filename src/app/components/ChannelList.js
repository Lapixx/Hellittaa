import { PropTypes } from 'prop-types';
import ChannelListItem from '../containers/ChannelListItem';
import ChannelCreationButton from '../components/ChannelCreationButton';

const ChannelList = ({ channels, onCreateNewChannel, activeChannelId, onChannelClick }) => (
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
        <ChannelCreationButton label="+" onCreate={onCreateNewChannel} />
    </div>
);

ChannelList.propTypes = {
    channels: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    activeChannelId: PropTypes.string.isRequired,
    onChannelClick: PropTypes.func.isRequired,
    onCreateNewChannel: PropTypes.func.isRequired
};

export default ChannelList;
