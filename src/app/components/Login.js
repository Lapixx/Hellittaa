import { PropTypes } from 'prop-types';

import NameInput from '../components/NameInput';

import style from '../styles/login.scss';

const Login = ({ onSubmit }) => (
    <div className={style.login}>
        <div className={style.form}>
            <strong>Pick a username:</strong>
            <NameInput onSubmit={onSubmit} label="Login" />
        </div>
    </div>
);

Login.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Login;