import { PropTypes } from 'prop-types';
import style from '../styles/channelListItem.scss';

const ChannelListItem = ({ name, onClick, isActive, unread }) => (
    <div onClick={onClick} className={isActive ? style.activeItem : style.item}>
        #{name} {unread > 0 ? <span className={style.count}>{unread}</span> : null}
    </div>
);

ChannelListItem.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    unread: PropTypes.number.isRequired
};

export default ChannelListItem;
