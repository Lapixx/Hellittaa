import { Component } from 'react';
import { PropTypes } from 'prop-types';
import style from '../styles/messageInput.scss';

class MessageInput extends Component {

    focusInput = ()  => {
        this.inputElem.focus();
    };

    componentDidMount() {
        this.focusInput();
    }

    componentDidUpdate() {
        this.focusInput();
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const body = this.inputElem.value.trim();

        if (body.length > 0)
            this.props.onSend(body);

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
}

MessageInput.propTypes = {
    onSend: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default MessageInput;
