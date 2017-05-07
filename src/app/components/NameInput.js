import { PropTypes } from 'prop-types';
import style from '../styles/nameInput.scss';

const NameInput = ({ onSubmit, label }) => {
    let inputElem;

    const onFormSubmit = (e) => {
        e.preventDefault();

        const name = inputElem.value.trim();

        if (onSubmit.length > 0)
            onSubmit(name);

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

NameInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default NameInput;
