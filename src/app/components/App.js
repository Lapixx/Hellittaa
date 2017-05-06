import ChannelSelection from '../containers/ChannelSelection';
import CurrentChannel from '../containers/CurrentChannel';

import style from '../styles/app.scss';

export default () => (
    <div className={style.main}>
        <div className={style.sidebar}>
            <ChannelSelection />
        </div>
        <div className={style.messages}>
            <CurrentChannel />
        </div>
    </div>
);
