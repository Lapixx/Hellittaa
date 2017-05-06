import { connect } from 'react-redux';

import { getUnreadForChannel } from '../reducers';

import ChannelListItem from '../components/ChannelListItem';

const mapStateToProps = (state, ownProps) => ({
    unread: getUnreadForChannel(state, ownProps.id)
});

const _ChannelListItem = connect(
    mapStateToProps
)(ChannelListItem);

export default _ChannelListItem;
