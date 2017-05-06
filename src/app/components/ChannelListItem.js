import { PropTypes } from 'prop-types';
import style from '../styles/channelListItem.scss';

const ChannelListItem = ({ name, onClick, isActive }) => (
    <div onClick={onClick} className={isActive ? style.activeItem : style.item}>
        {name}
    </div>
);

ChannelListItem.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
};

export default ChannelListItem;
