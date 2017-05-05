import ChannelMessageList from '../containers/ChannelMessageList';
import AddMessage from '../containers/AddMessage';

export default () => (
    <div>
        <h1>Hellittää</h1>
        <ChannelMessageList />
        <AddMessage label='Send' />
    </div>
);