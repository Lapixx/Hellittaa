import ChannelMessageList from '../containers/ChannelMessageList';
import AddMessage from '../containers/AddMessage';

import '../../styles/app.scss';

export default () => (
    <div>
        <h1>Hellittää</h1>
        <ChannelMessageList />
        <AddMessage label='Send' />
    </div>
);