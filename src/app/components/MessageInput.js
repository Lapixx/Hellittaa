import { PropTypes } from 'prop-types';
import style from '../styles/messageInput.scss';

const MessageInput = ({ onSend, label }) => {
    let inputElem;

    const onFormSubmit = (e) => {
        e.preventDefault();

        const body = inputElem.value.trim();

        if (onSend instanceof Function && body.length > 0)
            onSend(body);

        inputElem.value = '';
    };

    return (

        <form onSubmit={onFormSubmit} className={style.main}>
            <input ref={(n) => { inputElem = n; }} className={style.input} />
            <button type="submit" className={style.button}>
                {label}
            </button>
        </form>

    );
};

MessageInput.propTypes = {
    onSend: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default MessageInput;
