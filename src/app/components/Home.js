import { PropTypes } from 'prop-types';

import ChannelSelection from '../containers/ChannelSelection';
import CurrentChannel from '../containers/CurrentChannel';

import style from '../styles/app.scss';

const Home = ({ nickname }) => (
    <div className={style.main}>
        <div className={style.sidebar}>
            <ChannelSelection />
        </div>
        <div className={style.messages}>
            <CurrentChannel nickname={nickname} />
        </div>
    </div>
);

Home.propTypes = {
    nickname: PropTypes.string.isRequired
};

export default Home;