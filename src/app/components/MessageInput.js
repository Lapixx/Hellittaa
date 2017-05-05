const MessageInput = ({ onSend, label }) => {

    let body;

    const onFormSubmit = e => {
        e.preventDefault();
        onSend && onSend(body.value);
        body.value = '';
    };

    return (

        <form onSubmit={onFormSubmit}>
            <input ref={n => { body = n }} />
            <button type="submit">
                {label}
            </button>
        </form>

   );
};

export default MessageInput;