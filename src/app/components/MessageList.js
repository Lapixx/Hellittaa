import { Component } from 'react';
import { PropTypes } from 'prop-types';
import Message from './Message';

class MessageList extends Component {

    scrollDown = () => {
        this.msgBottom.scrollIntoView({ behavior: 'smooth' });
    };

    componentDidMount() {
        this.scrollDown();
    }

    componentDidUpdate() {
        this.scrollDown();
    }

    render () {
        return (
            <div>
                {this.props.messages.map(
                    message =>
                        <Message key={message.id} {...message} />
                )}
                <div ref={e => { this.msgBottom = e; }} />
            </div>
        );
    }

}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default MessageList;
