import { Component } from 'react';
import { PropTypes } from 'prop-types';
import style from '../styles/nameInput.scss';

class NameInput extends Component {

    componentDidMount() {
        this.inputElem.focus();
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const name = this.inputElem.value.trim();

        if (name.length > 0)
            this.props.onSubmit(name);

        this.inputElem.value = '';
    };

    render () {

        return (
            <form onSubmit={this.onFormSubmit} className={style.main}>
                <input ref={(n) => {
                    this.inputElem = n;
                }} className={style.input}/>
                <button type="submit" className={style.button}>
                    {this.props.label}
                </button>
            </form>
        );
    }
};

NameInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default NameInput;
